import * as TradingDomain from './trading';
import * as CultDomain from './cult';
import { DomainEvents } from './events';

export { DomainEvents };

export type DomainState = { events: Phaser.Events.EventEmitter } & TradingDomain.TradingDomainState & CultDomain.CultDomainState;

type InitDomainInput = TradingDomain.TradingInitData & CultDomain.CultInitData;

export const initDomainState = (input: InitDomainInput): DomainState => {
  const domainEventEmitter = new Phaser.Events.EventEmitter();

  const domainState = {
    ...TradingDomain.initTradingDomainState(input, domainEventEmitter),
    ...CultDomain.initCultDomainState(input, domainEventEmitter),
  };

  registerDomainEventHandlers(domainState);

  return domainState;
};

const registerDomainEventHandlers = (domainState: DomainState) => {
  domainState.events.on(DomainEvents.cultRevenueGenerated, (revenue) => {
    TradingDomain.addRevenueToRootAcount(domainState, revenue);
  });
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
