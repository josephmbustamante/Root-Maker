import { DomainEvents } from './events';
import * as _ from 'lodash';

export type CultInitData = {
}

export type CultDomainState = {
  events: Phaser.Events.EventEmitter,
  happiness: number;
  suggestedDonation: number;
  followers: number;
  capacity: number;
  actualNewFollowersPerTick: number;
  baseNewFollowersPerTick: number;
}

export const initCultDomainState = (input: CultInitData, events: Phaser.Events.EventEmitter): CultDomainState => {
  return {
    events,
    happiness: 100,
    followers: 1,
    capacity: 10,
    actualNewFollowersPerTick: 1,
    baseNewFollowersPerTick: 1,
    suggestedDonation: 0,
  };
};

const FOLLOWERS_START_LEAVING_THRESHOLD = 40;

export const calculateNewHappinessLevel = (domainState: CultDomainState) => {
  return domainState.suggestedDonation > 100 ? 0 : 100 - domainState.suggestedDonation;
};

export const calculateDonationPerTick = (domainState: CultDomainState) => {
  return domainState.happiness >= FOLLOWERS_START_LEAVING_THRESHOLD ? domainState.suggestedDonation * domainState.followers : 0;
};

const calculateCurrentFollowersPerTick = (domainState: CultDomainState) => {
  if (domainState.happiness < FOLLOWERS_START_LEAVING_THRESHOLD) {
    domainState.actualNewFollowersPerTick = (domainState.happiness - FOLLOWERS_START_LEAVING_THRESHOLD) * domainState.baseNewFollowersPerTick;
  }
  else {
    domainState.actualNewFollowersPerTick = domainState.baseNewFollowersPerTick * (domainState.happiness * 0.01);
  }

  domainState.events.emit(DomainEvents.followersPerTickChanged);
}

export const changeHappiness = (domainState: CultDomainState, newHappiness: number) => {
  domainState.happiness = newHappiness;
  calculateCurrentFollowersPerTick(domainState);

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
  const revenue = calculateDonationPerTick(domainState);

  domainState.events.emit(DomainEvents.cultRevenueGenerated, revenue);
};

export const addFollowersToCult = (domainState: CultDomainState) => {
  if (domainState.followers < domainState.capacity) {
    const potentialNewFollowerCount = domainState.followers + domainState.actualNewFollowersPerTick;

    domainState.followers = _.clamp(potentialNewFollowerCount, 0, domainState.capacity);
    domainState.events.emit(DomainEvents.followerCountChanged);
  }
};
