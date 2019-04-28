import * as Domain from 'src/domain';
import * as _ from 'lodash';
import * as ExchangeInterface from '../components/exchange-interface';
import * as CultInterface from '../components/cult-interface';
import * as Ticker from 'src/components/ticker';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  domainState: Domain.DomainState;
  tickerState: Ticker.TickerState;

  domainTickTime = 5000; // milliseconds
  timeSinceLastTick = 0;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.domainState = Domain.initDomainState({
      trading: {
        rootCurrencyName: 'root',
        rootCurrencyStartingAmount: 100,
        nations: [
          { currency: 'Duller', nation: 'Andromeda' },
          { currency: 'When', nation: 'Corennia' },
          { currency: 'Prawn', nation: 'Great Burton' },
          { currency: 'Pesto', nation: 'Median' },
        ],
      },
    });

    this.add.text(50, 50, 'EXCHANGE').setInteractive({ useHandCursor: true }).on('pointerup', () => {
      cultContainer.setVisible(false);
      exchangeContainer.setVisible(true);
    });

    this.add.text(200, 50, 'CULT').setInteractive({ useHandCursor: true }).on('pointerup', () => {
      exchangeContainer.setVisible(false);
      cultContainer.setVisible(true);
    });

    const exchangeContainer = ExchangeInterface.createExchangeInterface(this, this.domainState.trading);
    const cultContainer = CultInterface.createCultInterface(this).setVisible(false);

    this.tickerState = Ticker.createNewsTicker(this, this.domainState);
  }

  public update(time, delta) {
    this.timeSinceLastTick += delta;

    if (this.timeSinceLastTick >= this.domainTickTime) {
      console.log('tick!');
      this.timeSinceLastTick = 0;

      Domain.handleTick(this.domainState);
    }

    Ticker.updateStories(this, this.tickerState);
  }
}
