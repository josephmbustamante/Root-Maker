import * as Domain from 'src/domain';
import * as TradingDomain from 'src/domain/trading';
import { DomainEvents } from 'src/domain/events';
import * as _ from 'lodash';
import * as ExchangeInterface from '../components/exchange-interface';
import * as Styles from 'src/shared/styles';
import { addHorizontalScreenLine } from 'src/components/line';
import { addRectangle } from 'src/components/rectangle';
import * as CultInterface from '../components/cult-interface';
import * as Ticker from 'src/components/ticker';
import { GameEvents } from 'src/shared/events';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  domainState: Domain.DomainState;
  tickerState: Ticker.TickerState;

  public buyAmount: number = 0;
  public sellAmount: number = 0;
  public selectedAccount: TradingDomain.Account;

  username: string;

  domainTickTime = 1000; // milliseconds
  timeSinceLastTick = 0;

  backgroundMusic: Phaser.Sound.BaseSound;

  constructor() {
    super(sceneConfig);
  }

  public init(data: { username: string, backgroundMusic: Phaser.Sound.BaseSound }) {
    this.username = data.username || '';
    this.backgroundMusic = data.backgroundMusic;

    this.events.on(GameEvents.buyAmountChanged, (amount) => {
      this.buyAmount = amount;
    });

    this.events.on(GameEvents.sellAmountChanged, (amount) => {
      this.sellAmount = amount;
    });

    this.events.on(GameEvents.selectedAccountChanged, ({ account }) => {
      this.selectedAccount = account;
    });
  }

  public create() {
    this.domainState = Domain.initDomainState({
      rootCurrencyName: 'root',
      rootCurrencyStartingAmount: 100,
      nations: [
        { currency: 'Duller', nation: 'Andromeda' },
        { currency: 'When', nation: 'Corennia' },
        { currency: 'Prawn', nation: 'Great Burton' },
        { currency: 'Pesto', nation: 'Median' },
      ],
    });

    const exchangeTab = this.add.text(Styles.offset, Styles.tabY, 'EXCHANGE', Styles.selectedTab);
    exchangeTab.setInteractive({ useHandCursor: true });
    exchangeTab.on('pointerup', () => {
      cultTab.setStyle(Styles.unselectedTab);
      exchangeTab.setStyle(Styles.selectedTab);
      cultContainer.setVisible(false);
      exchangeContainer.setVisible(true);
    });

    const cultTab = this.add.text(exchangeTab.x + exchangeTab.width + Styles.offset * 2, Styles.tabY, 'CULT', Styles.unselectedTab);
    cultTab.setVisible(false);
    cultTab.setInteractive({ useHandCursor: true }).on('pointerup', () => {
      exchangeTab.setStyle(Styles.unselectedTab);
      cultTab.setStyle(Styles.selectedTab);
      exchangeContainer.setVisible(false);
      cultContainer.setVisible(true);
    });
    this.domainState.events.on(DomainEvents.cultCapabilityUnlocked, () => {
      cultTab.setVisible(true);
    });



    const logo = this.add.image(Styles.offset * 2, Styles.offset, 'logo-png').setOrigin(0, 0);
    // logo.setScale(0.3, 0.3); // necessary for the svg style
    addHorizontalScreenLine(this, 50);
    const usernameText = this.add.text(Styles.offset, 70, 'USERNAME', Styles.listItemStyle);
    addRectangle(this, usernameText.x + usernameText.width + (Styles.offset * 2), 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
    this.add.text(usernameText.x + usernameText.width + (Styles.offset * 3), 60 + Styles.offset / 2, this.username, { color: Styles.textColor });

    addHorizontalScreenLine(this, 100);
    addHorizontalScreenLine(this, 700);

    const exchangeContainer = ExchangeInterface.createExchangeInterface(this, this.domainState);
    const cultContainer = CultInterface.createCultInterface(this, this.domainState).setVisible(false);

    this.tickerState = Ticker.createNewsTicker(this, this.domainState);
  }

  public update(time, delta) {
    this.timeSinceLastTick += delta;

    if (this.timeSinceLastTick >= this.domainTickTime) {
      // console.log('tick!');
      this.timeSinceLastTick = 0;

      Domain.handleTick(this.domainState);
    }

    Ticker.updateStories(this, this.tickerState);
  }
}
