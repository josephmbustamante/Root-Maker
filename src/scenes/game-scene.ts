import * as Domain from 'src/domain';
import * as _ from 'lodash';
import * as ExchangeInterface from '../components/exchange-interface';
import * as Styles from 'src/shared/styles';
import { addHorizontalScreenLine } from 'src/components/line';
import { addRectangle } from 'src/components/rectangle';
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

  username: string;

  domainTickTime = 5000; // milliseconds
  timeSinceLastTick = 0;

  constructor() {
    super(sceneConfig);
  }

  public init(data: { username: string }) {
    this.username = data.username || '';
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

    const exchangeTab = this.add.text(Styles.offset, Styles.tabY, 'EXCHANGE');
    exchangeTab.setInteractive({ useHandCursor: true });
    exchangeTab.on('pointerup', () => {
      cultContainer.setVisible(false);
      exchangeContainer.setVisible(true);
    });

    this.add.text(exchangeTab.x + exchangeTab.width + Styles.offset * 2, Styles.tabY, 'CULT').setInteractive({ useHandCursor: true }).on('pointerup', () => {
      exchangeContainer.setVisible(false);
      cultContainer.setVisible(true);
    });



    const logo = this.add.image(Styles.offset * 2, Styles.offset, 'logo-png').setOrigin(0, 0);
    // logo.setScale(0.3, 0.3); // necessary for the svg style
    addHorizontalScreenLine(this, 50);
    const usernameText = this.add.text(Styles.offset, 70, 'USERNAME', Styles.textStyle);
    addRectangle(this, usernameText.x + usernameText.width + (Styles.offset * 2), 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
    this.add.text(usernameText.x + usernameText.width + (Styles.offset * 3), 60 + Styles.offset / 2, this.username, { color: Styles.textColor });

    addHorizontalScreenLine(this, 100);
    addHorizontalScreenLine(this, 700);

    addRectangle(this,
      Styles.tradePage.currencyList.x,
      Styles.tradePage.currencyList.y,
      Styles.tradePage.currencyList.width,
      Styles.tradePage.currencyList.height,
      Styles.foregroundColorHex,
    );

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
