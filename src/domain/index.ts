import * as TradingDomain from './trading';
import * as CultDomain from './cult';

export { DomainEvents } from './events';

export type DomainState = { events: Phaser.Events.EventEmitter } & TradingDomain.TradingDomainState & CultDomain.CultDomainState;

type InitDomainInput = TradingDomain.TradingInitData & CultDomain.CultInitData;

export const initDomainState = (input: InitDomainInput): DomainState => {
  const domainEventEmitter = new Phaser.Events.EventEmitter();
  return {
    ...TradingDomain.initTradingDomainState(input, domainEventEmitter),
    ...CultDomain.initCultDomainState(input, domainEventEmitter),
  };
};

export const handleTick = (domainState: DomainState) => {
  // Trading Domain Events
  TradingDomain.runCurrencyFluctuations(domainState);
  TradingDomain.runRandomNationEvents(domainState);
  TradingDomain.checkForExpiringNationEvents(domainState);

  // Cult Domain Events
  CultDomain.addFollowersToCult(domainState);
  CultDomain.generateRevenueFromCult(domainState);
};
