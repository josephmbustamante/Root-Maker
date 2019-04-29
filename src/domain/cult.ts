import { DomainEvents } from './events';

export type CultInitData = {
}

export type CultDomainState = {
  events: Phaser.Events.EventEmitter,
  happiness: number;
  suggestedDonation: number;
  maxSuggestedDonation: number;
  followers: number;
  capacity: number;
  followersPerTick: number;
}

export const initCultDomainState = (input: CultInitData, events: Phaser.Events.EventEmitter): CultDomainState => {
  return {
    events,
    happiness: 100,
    followers: 1,
    capacity: 100,
    followersPerTick: 0.1,
    suggestedDonation: 5,
    maxSuggestedDonation: 100,
  };
};

export const changeSuggestedDonation = (domainState: CultDomainState, newDonationAmount: number) => {
  domainState.suggestedDonation = newDonationAmount;

  domainState.events.emit(DomainEvents.suggestedDonationChanged);
};

export const changeCultCapacity = (domainState: CultDomainState, newCapacity: number) => {
  domainState.capacity = newCapacity;

  domainState.events.emit(DomainEvents.cultCapacityChanged);
};

export const generateRevenueFromCult = (domainState: CultDomainState) => {
  const revenue = domainState.followers * domainState.suggestedDonation;

  domainState.events.emit(DomainEvents.cultRevenueGenerated, revenue);
};

export const addFollowersToCult = (domainState: CultDomainState) => {
  domainState.followers += domainState.followersPerTick;

  domainState.events.emit(DomainEvents.followerCountChanged);
};
