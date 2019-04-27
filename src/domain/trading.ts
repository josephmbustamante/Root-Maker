import * as Phaser from 'phaser';


export enum DomainEvents {
  tradeCompleted = "domain.tradeCompleted",
  tradeFailed = "domain.tradeFailed",
  accountBalanceChanged = "domain.accountBalanceChanged",
  exchangeRatesChanged = "domain.exchangeRatesChanged",
}
export enum DomainErrors {
  tradeFailed_InsufficientFunds = "Insufficient Funds"
}

export type Currency = {
  name: string,
  exchangeRate: number,
}
export type Transaction = {
  amount: number,
  transactionType: "Credit" | "Debit"
}
export type Account = {
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
  destinationCurrency: Currency, sourceAmount: number, destinationAmount: number,
  exchangeRate: number
}
export type DomainState = {
  tradeLedger: TradeLedger,
  tradeCurrencies: Currency[],
  tradeAccounts: Account[],
  rootCurrency: Currency,
  rootAccount: Account
}

export function createAccount(name: string, startingBalance: number, currency: Currency): Account {
  let newAccount =  {
    name: name,
    currency: currency,
    balance: startingBalance,
    ledger: []
  }
  if (startingBalance > 0) {
    newAccount.ledger.push({amount: startingBalance, transactionType: "Credit" });
  }
  return newAccount;
}

export function recordTrade(source: Account, destination: Account, sourceAmount: number, sourceToDestinationExchangeRate: number, tradeLedger: TradeLedger, eventEmitter: Phaser.Events.EventEmitter) {
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
    tradeLedger.trades.push(newTrade);

    eventEmitter.emit(DomainEvents.tradeCompleted, newTrade);
    eventEmitter.emit(DomainEvents.accountBalanceChanged, source);
    eventEmitter.emit(DomainEvents.accountBalanceChanged, destination);
  } else {
    eventEmitter.emit(DomainEvents.tradeFailed, DomainErrors.tradeFailed_InsufficientFunds);
  }
}

const MIN_STARTING_EXCHANGE_RATE = 0.25;
const MAX_STARTING_EXCHANGE_RATE = 4;

function randomDecimalBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
export function initState(rootCurrencyName: string, rootCurrencyStartingAmount: number, currencyNames: string[]): DomainState {
  let currencies: Currency[] = currencyNames.map(n => {
    return {name: n, exchangeRate: randomDecimalBetween(MIN_STARTING_EXCHANGE_RATE, MAX_STARTING_EXCHANGE_RATE) }
  });
  let accounts: Account[] = currencies.map(c => {
    return createAccount(c.name, 0, c);
  });
  let rootCurrency = { name: rootCurrencyName, exchangeRate: 1 };

  return {
    tradeCurrencies: currencies,
    tradeAccounts: accounts,
    tradeLedger: { trades: [] },
    rootCurrency: rootCurrency,
    rootAccount: createAccount(rootCurrencyName, rootCurrencyStartingAmount, rootCurrency)
  }
}

export function runCurrencyFluctuations(state: DomainState, eventEmitter: Phaser.Events.EventEmitter) {
  console.log('fluctuating');
  state.tradeCurrencies.forEach(currency => {
    currency.exchangeRate += randomDecimalBetween(-0.5, 0.5);
  });
  eventEmitter.emit(DomainEvents.exchangeRatesChanged);
}
