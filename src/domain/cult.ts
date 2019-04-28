export type CultInitData = {
}

export type CultDomainState = {
  events: Phaser.Events.EventEmitter,
  // tradeAmount: number;
  // selectedAccount: Account | null,
}

export const initCultDomainState = (input: CultInitData, events: Phaser.Events.EventEmitter): CultDomainState => {
  return {
    events,
  };
};
