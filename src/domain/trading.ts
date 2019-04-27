import * as Phaser from 'phaser';

export enum DomainEvents {
  tradeCompleted = "domain.tradeCompleted",
  tradeFailed = "domain.tradeFailed",
  accountBalanceChanged = "domain.accountBalanceChanged",
  exchangeRatesChanged = "domain.exchangeRatesChanged",
  nationEventOccurred = "domain.nationEventOccurred",
}
export enum DomainErrors {
  tradeFailed_InsufficientFunds = "Insufficient Funds"
}
export type Currency = {
  name: string,
  exchangeRate: number,
}
export type Nation = {
  name: string,
  currency: Currency,
  activeEvents: NationEvent[],
  historicalEvents: NationEvent[],
}
export type NationEvent = {
  name: string,
  headline: string,
  baseMultiplier: number,
  fluxMultiplier: number
}
export type Transaction = {
  amount: number,
  transactionType: "Credit" | "Debit"
}
export type Account = {
  kind: "trading" | "root",
  name: string,
  currency: Currency,
  balance: number,
  ledger: Transaction[],
}
export type TradeLedger = {
  trades: Trade[]
}
export type Trade = {
  sourceCurrency: Currency,
  destinationCurrency: Currency,
  sourceAmount: number,
  destinationAmount: number,
  exchangeRate: number
}
export type DomainState = {
  tradeLedger: TradeLedger,
  nations: Nation[],
  tradeCurrencies: Currency[],
  tradeAccounts: Account[],
  rootCurrency: Currency,
  rootAccount: Account,
  events: Phaser.Events.EventEmitter,
}

export function createAccount(name: string, startingBalance: number, currency: Currency, isRoot: boolean): Account {
  let newAccount: Account =  {
    kind: isRoot ? "root" : "trading",
    name: name,
    currency: currency,
    balance: startingBalance,
    ledger: [],
  }
  if (startingBalance > 0) {
    newAccount.ledger.push({amount: startingBalance, transactionType: "Credit" });
  }
  return newAccount;
}

export function recordTrade(source: Account, destination: Account, sourceAmount: number, sourceToDestinationExchangeRate: number, state: DomainState) {
  if (source.balance >= sourceAmount) {
    source.ledger.push({amount: sourceAmount, transactionType: "Debit"});
    source.balance -= sourceAmount;
    let destinationAmount = sourceAmount * sourceToDestinationExchangeRate;
    destination.ledger.push({amount: destinationAmount, transactionType: "Credit"});
    destination.balance += destinationAmount;
    let newTrade = {
      sourceAmount: sourceAmount,
      sourceCurrency: source.currency,
      destinationAmount: destinationAmount,
      destinationCurrency: destination.currency,
      exchangeRate: sourceToDestinationExchangeRate
    };
    state.tradeLedger.trades.push(newTrade);

    state.events.emit(DomainEvents.tradeCompleted, newTrade);
    state.events.emit(DomainEvents.accountBalanceChanged, source);
    state.events.emit(DomainEvents.accountBalanceChanged, destination);
  } else {
    state.events.emit(DomainEvents.tradeFailed, DomainErrors.tradeFailed_InsufficientFunds);
  }
}

const MIN_STARTING_EXCHANGE_RATE = 0.25;
const MAX_STARTING_EXCHANGE_RATE = 4;
const MIN_CURRENCY_EXCHANGE_RATE = 0.001;
const MAX_CURRENCY_EXCHANGE_RATE = 999;

function randomDecimalBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export type TradingInitNationalCurrency = { nation: string, currency: string };
export type TradingInitData = {
  rootCurrencyName: string,
  rootCurrencyStartingAmount: number,
  nations: TradingInitNationalCurrency[]
}
export function initState(initData: TradingInitData): DomainState {
  let nations: Nation[] = initData.nations.map(n => {
    return {
      name: n.nation,
      currency: {name: n.currency, exchangeRate: randomDecimalBetween(MIN_STARTING_EXCHANGE_RATE, MAX_STARTING_EXCHANGE_RATE) },
      activeEvents: [],
      historicalEvents: [],
    }
  });
  let currencies = nations.map(n => n.currency);
  let accounts: Account[] = currencies.map(c => {
    return createAccount(c.name, 0, c, false);
  });
  let rootCurrency = { name: initData.rootCurrencyName, exchangeRate: 1 };

  return {
    nations: nations,
    tradeCurrencies: currencies,
    tradeAccounts: accounts,
    tradeLedger: { trades: [] },
    rootCurrency: rootCurrency,
    rootAccount: createAccount(initData.rootCurrencyName, initData.rootCurrencyStartingAmount, rootCurrency, true),
    events: new Phaser.Events.EventEmitter(),
  }
}

export function runCurrencyFluctuations(state: DomainState) {
  state.nations.forEach(nation => {
    let currency = nation.currency;
    let fluxMultiplier = nation.activeEvents.reduce((i, event) => i * event.fluxMultiplier, 1);
    let baseMultiplier = nation.activeEvents.reduce((i, event) => i * event.baseMultiplier, 1);
    currency.exchangeRate = currency.exchangeRate * randomDecimalBetween(0.85 * fluxMultiplier, 1.15 * fluxMultiplier) * baseMultiplier;
    if (currency.exchangeRate < MIN_CURRENCY_EXCHANGE_RATE) {
      currency.exchangeRate = MIN_CURRENCY_EXCHANGE_RATE;
    }
    else if (currency.exchangeRate > MAX_CURRENCY_EXCHANGE_RATE) {
      currency.exchangeRate = MAX_CURRENCY_EXCHANGE_RATE;
    }
  });
  state.events.emit(DomainEvents.exchangeRatesChanged);
}

type NationEventType = {
  name: string,
  headline: string,
  baseMultiplierMax: number,
  baseMultiplierMin: number,
  fluxMultiplierMax: number,
  fluxMultiplierMin: number,
}
const nationEventTypes: NationEventType[] = [
  {
    name: "War",
    headline: "has gone to war!",
    baseMultiplierMax: 0.9,
    baseMultiplierMin: 0.6,
    fluxMultiplierMax: 1.5,
    fluxMultiplierMin: 1.2
  }
]
const RANDOM_EVENT_THRESHOLD = 0.9;
function randomIntegerBetween(min: number, max: number) {
  return Math.floor(randomDecimalBetween(min, max));
}
function setActiveEventOnNation(event: NationEvent, nation: Nation, state: DomainState) {
  nation.activeEvents.push(event);
  state.events.emit(DomainEvents.nationEventOccurred, nation, event);
}
export function runRandomNationEvents(state: DomainState) {
  if (Math.random() > RANDOM_EVENT_THRESHOLD) {
    let eventType = nationEventTypes[randomIntegerBetween(0, nationEventTypes.length)];
    let event: NationEvent = {
      baseMultiplier: randomDecimalBetween(eventType.baseMultiplierMin, eventType.baseMultiplierMax),
      fluxMultiplier: randomDecimalBetween(eventType.fluxMultiplierMin, eventType.fluxMultiplierMax),
      name: eventType.name,
      headline: eventType.headline,
    };
    let chosenNation = state.nations[randomIntegerBetween(0, state.nations.length)];
    setActiveEventOnNation(event, chosenNation, state);
  }
}
