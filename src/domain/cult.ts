import { DomainEvents } from './events';
import { DomainState } from './';
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
  builtWebsite: boolean;
  builtChurch: boolean;
  builtComplex: boolean;
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
    builtWebsite: false,
    builtChurch: false,
    builtComplex: false,
  };
};

const FOLLOWERS_START_LEAVING_THRESHOLD = 40;
const WEBSITE_FOLLOWERS_MULTIPLIER = 2;
const WEBSITE_CAPACITY_MULTIPLIER = 4;
const CHURCH_FOLLOWERS_MULTIPLIER = 2;
const CHURCH_CAPACITY_MULTIPLIER = 10;
const COMPLEX_FOLLOWERS_MULTIPLIER = 2;
const COMPLEX_CAPACITY_MULTIPLIER = 100;

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
    let nfpt = domainState.baseNewFollowersPerTick * (domainState.happiness * 0.01);
    domainState.actualNewFollowersPerTick = nfpt;
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
  const newFollowerCount = domainState.followers + domainState.actualNewFollowersPerTick;

  domainState.followers = _.clamp(newFollowerCount, 0, domainState.capacity);
  domainState.events.emit(DomainEvents.followerCountChanged);
};

export const buildWebsite = (domainState: DomainState) => {
  let websiteCost = 1000000;
  if (domainState.rootAccount.balance >= websiteCost && !domainState.builtWebsite) {
    domainState.events.emit(DomainEvents.spentRootOnCultThings, websiteCost);
    domainState.builtWebsite = true;
    domainState.capacity = domainState.capacity * WEBSITE_CAPACITY_MULTIPLIER;
    domainState.baseNewFollowersPerTick = domainState.baseNewFollowersPerTick * WEBSITE_FOLLOWERS_MULTIPLIER;
    calculateCurrentFollowersPerTick(domainState);
    domainState.events.emit(DomainEvents.cultWebsiteBuilt);
    domainState.events.emit(DomainEvents.cultCapacityChanged);
  }
}
export const buildChurch = (domainState: DomainState) => {
  let churchCost = 3000000;
  if (domainState.rootAccount.balance >= churchCost && !domainState.builtChurch) {
    domainState.events.emit(DomainEvents.spentRootOnCultThings, churchCost);
    domainState.builtChurch = true;
    domainState.capacity = domainState.capacity * CHURCH_CAPACITY_MULTIPLIER;
    domainState.baseNewFollowersPerTick = domainState.baseNewFollowersPerTick * CHURCH_FOLLOWERS_MULTIPLIER;
    calculateCurrentFollowersPerTick(domainState);
    domainState.events.emit(DomainEvents.cultChurchBuilt);
    domainState.events.emit(DomainEvents.cultCapacityChanged);
  }
}

export const buildComplex = (domainState: DomainState) => {
  let complexCost = 3000000;
  if (domainState.rootAccount.balance >= complexCost && !domainState.builtComplex) {
    domainState.events.emit(DomainEvents.spentRootOnCultThings, complexCost);
    domainState.builtComplex = true;
    domainState.capacity = domainState.capacity * COMPLEX_CAPACITY_MULTIPLIER;
    domainState.baseNewFollowersPerTick = domainState.baseNewFollowersPerTick * COMPLEX_FOLLOWERS_MULTIPLIER;
    calculateCurrentFollowersPerTick(domainState);
    domainState.events.emit(DomainEvents.cultComplexBuilt);
    domainState.events.emit(DomainEvents.cultCapacityChanged);
  }
}
