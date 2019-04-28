import * as TradingDomain from './trading';
import * as CultDomain from './cult';

export { DomainEvents } from './events';

export type DomainState = TradingDomain.TradingDomainState & CultDomain.CultDomainState;

type InitDomainInput = TradingDomain.TradingInitData & CultDomain.CultInitData;

export const initDomainState = (input: InitDomainInput): DomainState => {
  return {
    ...TradingDomain.initTradingDomainState(input),
    ...CultDomain.initCultDomainState(input),
  };
};

export const handleTick = (domainState: DomainState) => {
  // Trading Domain Events
  TradingDomain.runCurrencyFluctuations(domainState);
  TradingDomain.runRandomNationEvents(domainState);
  TradingDomain.checkForExpiringNationEvents(domainState);

  // Cult Domain Events
  // TODO
};
