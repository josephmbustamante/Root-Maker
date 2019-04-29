
export enum DomainEvents {
  // Trading
  tradeCompleted = 'domain.tradeCompleted',
  tradeFailed = 'domain.tradeFailed',
  accountBalanceChanged = 'domain.accountBalanceChanged',
  exchangeRatesChanged = 'domain.exchangeRatesChanged',
  nationEventOccurred = 'domain.nationEventOccurred',
  nationEventEnded = 'domain.nationEventEnded',
  influenceCapabilityUnlocked = 'domain.influenceCapabilityUnlocked',

  // Cult
  cultCapabilityUnlocked = 'domain.cultCapabilityUnlocked',
  followerCountChanged = 'domain.followerCountChanged',
  cultRevenueGenerated = 'domain.cultRevenueGenerated',
  suggestedDonationChanged = 'domain.suggestedDonationChanged',
  cultCapacityChanged = 'domain.cultCapacityChanged',
  cultHappinessChanged = 'domain.cultHappinessChanged',
  followersPerTickChanged = 'domain.followersPerTickChanged',
}
