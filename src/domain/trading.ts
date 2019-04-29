import * as Phaser from 'phaser';
import { DomainEvents } from './events';

export enum DomainErrors {
  tradeFailed_InsufficientFunds = "Insufficient Funds"
}
export type Currency = {
  name: string,
  exchangeRate: number,
  trend: "up" | "down",
}
export type Nation = {
  name: string,
  currency: Currency,
  activeEvents: NationEvent[],
  historicalEvents: NationEvent[],
}
export type NationEvent = {
  name: NationEventTypeNames,
  eventStartHeadline: string,
  eventEndHeadline: string,
  baseMultiplier: number,
  fluxMultiplier: number,
  duration: number,
  triggeredTime: number,
  kind: "positive" | "negative",
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
export type TradingDomainState = {
  tradeLedger: TradeLedger,
  nations: Nation[],
  tradeCurrencies: Currency[],
  tradeAccounts: Account[],
  rootCurrency: Currency,
  rootAccount: Account,
  events: Phaser.Events.EventEmitter,
  totalPortfolioValue: number
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

function applyTransactionToAccount(account: Account, amount: number, transactionType: "Credit" | "Debit", state: TradingDomainState) {
  account.ledger.push({amount: amount, transactionType: "Debit"});
  account.balance += transactionType == "Credit" ? amount : -1 * amount;
}

export function recordTrade(source: Account, destination: Account, sourceAmount: number, sourceToDestinationExchangeRate: number, state: TradingDomainState) {
  if (source.balance >= sourceAmount) {
    let destinationAmount = sourceAmount * sourceToDestinationExchangeRate;
    applyTransactionToAccount(source, sourceAmount, "Debit", state);
    applyTransactionToAccount(destination, destinationAmount, "Credit", state);

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

const MIN_STARTING_EXCHANGE_RATE = 5;
const MAX_STARTING_EXCHANGE_RATE = 40;
const MIN_CURRENCY_EXCHANGE_RATE = 1;
const MAX_CURRENCY_EXCHANGE_RATE = 99;

function randomDecimalBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export type TradingInitNationalCurrency = { nation: string, currency: string };
export type TradingInitData = {
  rootCurrencyName: string,
  rootCurrencyStartingAmount: number,
  nations: TradingInitNationalCurrency[]
}
export function initTradingDomainState(initData: TradingInitData, events: Phaser.Events.EventEmitter): TradingDomainState {
  let nations: Nation[] = initData.nations.map(n => {
    return {
      name: n.nation,
      currency: { name: n.currency, exchangeRate: randomDecimalBetween(MIN_STARTING_EXCHANGE_RATE, MAX_STARTING_EXCHANGE_RATE), trend: "up" } as Currency,
      activeEvents: [],
      historicalEvents: [],
    }
  });
  let currencies = nations.map(n => n.currency);
  let accounts: Account[] = currencies.map(c => {
    return createAccount(c.name, 0, c, false);
  });
  let rootCurrency: Currency = { name: initData.rootCurrencyName, exchangeRate: 1, trend: "up" };

  return {
    events,
    nations: nations,
    tradeCurrencies: currencies,
    tradeAccounts: accounts,
    tradeLedger: { trades: [] },
    rootCurrency,
    rootAccount: createAccount(initData.rootCurrencyName, initData.rootCurrencyStartingAmount, rootCurrency, true),
    totalPortfolioValue: initData.rootCurrencyStartingAmount,
  }
}

function recalculateTradingPortfolioValue(state: TradingDomainState) {
  state.totalPortfolioValue = state.rootAccount.balance + state.tradeAccounts.reduce((val, account) => {
    return val + (account.balance / account.currency.exchangeRate)
  }, 0);
}

export function runCurrencyFluctuations(state: TradingDomainState) {
  state.nations.forEach(nation => {
    let currency = nation.currency;
    let fluxMultiplier = nation.activeEvents.reduce((i, event) => i * event.fluxMultiplier, 1);
    let baseMultiplier = nation.activeEvents.reduce((i, event) => i * event.baseMultiplier, 1);
    let change = currency.exchangeRate * (randomDecimalBetween(0.98 * fluxMultiplier, 1.02 * fluxMultiplier)) * baseMultiplier - currency.exchangeRate;
    let exrMidpoint = (MAX_CURRENCY_EXCHANGE_RATE - MIN_CURRENCY_EXCHANGE_RATE) / 2;
    let changeScale = (
      Math.abs(currency.exchangeRate - exrMidpoint) < 2
      || (change < 0 && currency.exchangeRate > exrMidpoint)
      || (change > 0 && currency.exchangeRate < exrMidpoint)
    ) ? 1 : ((exrMidpoint / 30.0) / Math.abs(currency.exchangeRate - exrMidpoint));
    let scaledChange = change * changeScale;
    currency.trend = scaledChange > 0 ? "up" : "down";
    currency.exchangeRate += scaledChange;
    if (currency.exchangeRate < MIN_CURRENCY_EXCHANGE_RATE) {
      currency.exchangeRate = MIN_CURRENCY_EXCHANGE_RATE;
    }
    else if (currency.exchangeRate > MAX_CURRENCY_EXCHANGE_RATE) {
      currency.exchangeRate = MAX_CURRENCY_EXCHANGE_RATE;
    }
  });
  state.events.emit(DomainEvents.exchangeRatesChanged);
  recalculateTradingPortfolioValue(state);
}

type NationEventTypeNames = "War" | "Forging friendships" | "Good day" | "Bad day" | "Great month" | "Terrible month" | "Famine" | "High productivity" | "Bad year" | "Outstanding year";
type NationEventType = {
  kind: "positive" | "negative",
  name: NationEventTypeNames,
  eventStartHeadline: string,
  eventEndHeadline: string,
  baseMultiplier: { min: number, max: number },
  fluxMultiplier: { min: number, max: number },
  duration: {min: number, max: number },
}
const nationEventTypes: NationEventType[] = [
  {
    kind: "negative",
    name: "War",
    eventStartHeadline: "has gone to war!",
    eventEndHeadline: "is no longer at war",
    baseMultiplier: {min: 1.01, max: 1.1},
    fluxMultiplier: {min: 1.0, max: 1.1},
    duration: {min: 60, max: 120}
  },
  {
    kind: "positive",
    name: "Forging friendships",
    eventStartHeadline: "is forging strong friendships",
    eventEndHeadline: "appears normal",
    baseMultiplier: {min: 0.90, max: 0.99},
    fluxMultiplier: {min: 0.2, max: 0.4},
    duration: {min: 60, max: 120}
  },
  {
    kind: "negative",
    name: "Famine",
    eventStartHeadline: "is experiencing a famine",
    eventEndHeadline: "has sufficient food and water",
    baseMultiplier: {min: 1.01, max: 1.1},
    fluxMultiplier: {min: 1.0, max: 1.1},
    duration: {min: 30, max: 60}
  },
  {
    kind: "positive",
    name: "High productivity",
    eventStartHeadline: "is hugely productive right now",
    eventEndHeadline: "is resting from their productivity push",
    baseMultiplier: {min: 0.99, max: 0.99},
    fluxMultiplier: {min: 0.7, max: 1.2},
    duration: {min: 30, max: 60}
  },
  {
    kind: "positive",
    name: "Good day",
    eventStartHeadline: "is having a particularly good time",
    eventEndHeadline: "is feeling average",
    baseMultiplier: {min: 0.9, max: 0.99},
    fluxMultiplier: {min: 0.7, max: 0.8},
    duration: {min: 10, max: 20}
  },
  {
    kind: "negative",
    name: "Bad day",
    eventStartHeadline: "sure looks like they're having a bad day",
    eventEndHeadline: "is ok",
    baseMultiplier: {min: 1.01, max: 1.1},
    fluxMultiplier: {min: 0.7, max: 0.8},
    duration: {min: 10, max: 20}
  },
  {
    kind: "positive",
    name: "Great month",
    eventStartHeadline: "is enjoying success this month",
    eventEndHeadline: "seems fine",
    baseMultiplier: {min: 0.9, max: 0.99},
    fluxMultiplier: {min: 0.7, max: 0.8},
    duration: {min: 20, max: 40}
  },
  {
    kind: "negative",
    name: "Terrible month",
    eventStartHeadline: "looks like they're struggling this month",
    eventEndHeadline: "looks like they're doing better",
    baseMultiplier: {min: 1.01, max: 1.1},
    fluxMultiplier: {min: 0.7, max: 0.8},
    duration: {min: 20, max: 40}
  },
  {
    kind: "positive",
    name: "Outstanding year",
    eventStartHeadline: "is outstanding this year",
    eventEndHeadline: "up to the usual",
    baseMultiplier: {min: 0.9, max: 0.99},
    fluxMultiplier: {min: 0.7, max: 0.8},
    duration: {min: 80, max: 160}
  },
  {
    kind: "negative",
    name: "Bad year",
    eventStartHeadline: "isn't having a very good year",
    eventEndHeadline: "isn't doing too bad",
    baseMultiplier: {min: 1.01, max: 1.1},
    fluxMultiplier: {min: 0.7, max: 0.8},
    duration: {min: 80, max: 160}
  },
]
const RANDOM_EVENT_THRESHOLD = 0.9;
function randomIntegerBetween(min: number, max: number) {
  return Math.floor(randomDecimalBetween(min, max));
}
function setActiveEventOnNation(event: NationEvent, nation: Nation, state: TradingDomainState) {
  nation.activeEvents.push(event);
  state.events.emit(DomainEvents.nationEventOccurred, nation, event.eventStartHeadline);
}
function endActiveEventOnNation(event: NationEvent, nation: Nation, state: TradingDomainState) {
  let index = nation.activeEvents.indexOf(event);
  if (index >= 0) {
    nation.activeEvents.splice(index, 1);
    nation.historicalEvents.push(event);
    state.events.emit(DomainEvents.nationEventEnded, nation, event.eventEndHeadline);
  }
}

export function checkForExpiringNationEvents(state: TradingDomainState) {
  let now = Date.now();
  state.nations.forEach(nation => {
    nation.activeEvents.forEach(event => {
      if (event.triggeredTime + event.duration*1000 <= now) {
        console.log("Expiring an event!!!", now, event);
        endActiveEventOnNation(event, nation, state)
      }
    });
  });
}

export function runRandomNationEvents(state: TradingDomainState) {
  if (Math.random() > RANDOM_EVENT_THRESHOLD) {
    console.log("A RANDOM EVENT OCCURRED!!!");
    let eventType = nationEventTypes[randomIntegerBetween(0, nationEventTypes.length)];
    let chosenNation = state.nations[randomIntegerBetween(0, state.nations.length)];
    if (chosenNation.activeEvents.length == 0 || (chosenNation.activeEvents.length == 1 && chosenNation.activeEvents[0].kind == eventType.kind)) {
      let event: NationEvent = {
        baseMultiplier: randomDecimalBetween(eventType.baseMultiplier.min, eventType.baseMultiplier.max),
        fluxMultiplier: randomDecimalBetween(eventType.fluxMultiplier.min, eventType.fluxMultiplier.max),
        name: eventType.name,
        eventStartHeadline: eventType.eventStartHeadline,
        eventEndHeadline: eventType.eventEndHeadline,
        duration: randomIntegerBetween(eventType.duration.min, eventType.duration.max),
        triggeredTime: Date.now(),
        kind: eventType.kind,
      };
      setActiveEventOnNation(event, chosenNation, state);
    }
  }
}

export const addRevenueToRootAcount = (state: TradingDomainState, revenueAmount: number) => {
  state.rootAccount.balance += revenueAmount;
  state.events.emit(DomainEvents.accountBalanceChanged, state.rootAccount);
};
