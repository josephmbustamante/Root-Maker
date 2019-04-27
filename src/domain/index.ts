import * as TradingDomain from './trading';

export type DomainState = {
  trading: TradingDomain.DomainState;
};

interface InitDomainInput {
  trading: TradingDomain.TradingInitData;
};

export const initDomainState = (input: InitDomainInput): DomainState => {
  return {
    trading: TradingDomain.initTradingDomainState(input.trading),
  };
};

export const handleTick = (domainState: DomainState) => {
  // Trading Domain Events
  TradingDomain.runCurrencyFluctuations(domainState.trading);
  TradingDomain.runRandomNationEvents(domainState.trading);
  TradingDomain.checkForExpiringNationEvents(domainState.trading);

  // Cult Domain Events
  // TODO
};
