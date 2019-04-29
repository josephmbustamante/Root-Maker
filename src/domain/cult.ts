import { DomainEvents } from './events';

export type CultInitData = {
}

export type CultDomainState = {
  events: Phaser.Events.EventEmitter,
  happiness: number;
  suggestedDonation: number;
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
    suggestedDonation: 0,
  };
};

export const calculateNewHappinessLevel = (domainState: CultDomainState) => {
  return domainState.suggestedDonation > 100 ? 0 : 100 - domainState.suggestedDonation;
};

export const changeHappiness = (domainState: CultDomainState, newHappiness: number) => {
  domainState.happiness = newHappiness;

  domainState.events.emit(DomainEvents.cultHappinessChanged);
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
  if (domainState.followers < domainState.capacity) {
    const potentialNewFollowerCount = domainState.followers + domainState.followersPerTick;

    domainState.followers = potentialNewFollowerCount > domainState.capacity ? domainState.capacity : potentialNewFollowerCount;
    domainState.events.emit(DomainEvents.followerCountChanged);
  }
};
