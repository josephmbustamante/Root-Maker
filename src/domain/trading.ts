import * as Phaser from 'phaser';

export enum DomainEvents {
  tradeCompleted = "domain.tradeCompleted",
  tradeFailed = "domain.tradeFailed",
  accountBalanceChanged = "domain.accountBalanceChanged",
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

export function createAccount(name: string, startingBalance: number, currency: Currency): Account {
  return {
    name: name,
    currency: currency,
    balance: startingBalance,
    ledger: [{amount: startingBalance, transactionType: "Credit"}]
  }
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
