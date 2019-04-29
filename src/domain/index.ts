import * as TradingDomain from './trading';
import * as CultDomain from './cult';
import { DomainEvents } from './events';

export { DomainEvents };

export type CapabilityState = { name: string, enabled: boolean, activationThreshold: number, activationEvent: DomainEvents };
export type DomainState = {
  events: Phaser.Events.EventEmitter,
  capabilities: CapabilityState[],
} & TradingDomain.TradingDomainState & CultDomain.CultDomainState;

const defaultCapabilities = {
  capabilities: [
    { name: "Influence", enabled: false, activationThreshold: 1000, activationEvent: DomainEvents.influenceCapabilityUnlocked },
    { name: "Cult", enabled: false, activationThreshold: 10000, activationEvent: DomainEvents.cultCapabilityUnlocked },
  ]
}

type InitDomainInput = TradingDomain.TradingInitData & CultDomain.CultInitData;

export const initDomainState = (input: InitDomainInput): DomainState => {
  const domainEventEmitter = new Phaser.Events.EventEmitter();

  const domainState = {
    ...TradingDomain.initTradingDomainState(input, domainEventEmitter),
    ...CultDomain.initCultDomainState(input, domainEventEmitter),
    ...defaultCapabilities,
  };

  registerDomainEventHandlers(domainState);

  return domainState;
};

const registerDomainEventHandlers = (domainState: DomainState) => {
  domainState.events.on(DomainEvents.cultRevenueGenerated, (revenue) => {
    TradingDomain.addRevenueToRootAcount(domainState, revenue);
  });

  domainState.events.on(DomainEvents.suggestedDonationChanged, (revenue) => {
    const newHappiness = CultDomain.calculateNewHappinessLevel(domainState);
    CultDomain.changeHappiness(domainState, newHappiness);
  });
};

function checkCapabilityEnablement(domainState: DomainState) {
  domainState.capabilities.forEach(capability => {
    if (! capability.enabled && domainState.totalPortfolioValue >= capability.activationThreshold) {
      capability.enabled = true;
      domainState.events.emit(capability.activationEvent);
    }
  });
}

export const handleTick = (domainState: DomainState) => {
  // Trading Domain Events
  TradingDomain.runCurrencyFluctuations(domainState);
  TradingDomain.runRandomNationEvents(domainState);
  TradingDomain.checkForExpiringNationEvents(domainState);

  // Cult Domain Events
  CultDomain.addFollowersToCult(domainState);
  CultDomain.generateRevenueFromCult(domainState);

  checkCapabilityEnablement(domainState);
};
