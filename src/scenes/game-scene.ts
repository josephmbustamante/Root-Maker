import * as Domain from '../domain';
import * as _ from 'lodash';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  domainState: Domain.DomainState;
  currencyDisplay: Array<{ currencyName: string, valueText: Phaser.GameObjects.Text }>;

  buyHeaderStyle = { fontSize: '32px', color: '#44FF44' };
  columnHeaderStyle = { fontSize: '24px', color: '#FFFFFF' };
  currencyStyle = { fontSize: '20px', color: '#888888' };
  nameColumnX = 100;
  currentValueColumnX = 300;
  currentOwnedColumnX = 450;
  buyColumnX = 600;

  headerColumnY = 200;

  domainTickTime = 2000; // milliseconds
  timeSinceLastTick = 0;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.domainState = Domain.initState({
      rootCurrencyName: 'root',
      rootCurrencyStartingAmount: 100,
      nations: [
        { currency: 'Duller', nation: 'Andromeda' },
        { currency: 'When', nation: 'Corennia' },
        { currency: 'Prawn', nation: 'Great Burton' },
        { currency: 'Pesto', nation: 'Median' },
      ],
    });

    this.currencyDisplay = [];

    this.createExchangeInterface();

    // this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'sample');
    this.createNewsTicker(50, this.game.scale.height - 50);
  }

  public update(time, delta) {
    this.timeSinceLastTick += delta;

    if (this.timeSinceLastTick >= this.domainTickTime) {
      console.log('tick!');
      this.timeSinceLastTick = 0;
      Domain.runCurrencyFluctuations(this.domainState);


    }

    Domain.runRandomNationEvents(this.domainState);
    this.updateStories();
  }

  private createExchangeInterface = () => {
    this.createBuyInterface();
    this.createSellInterface();

    this.createInfoInterface();
  }

  private createInfoInterface() {
    const rootInfoText = this.add.text(this.nameColumnX, this.game.scale.height - 150, 'Root:', this.columnHeaderStyle);
    const rootValueText = this.add.text(rootInfoText.x + rootInfoText.width + 20, rootInfoText.y, `${this.domainState.rootAccount.balance}`, this.columnHeaderStyle);

    this.domainState.events.on(Domain.DomainEvents.accountBalanceChanged, (account: Domain.Account) => {
      if (account.name === this.domainState.rootAccount.name) {
        console.log('updating root', account.name, account.balance)
        rootValueText.setText(this.domainState.rootAccount.balance.toFixed(2));
      }
    });
  }

  private createBuyInterface = () => {

    this.add.text(150, 100, 'BUY', this.buyHeaderStyle);


    this.add.text(this.nameColumnX, this.headerColumnY, 'NAME', this.columnHeaderStyle);
    this.add.text(this.currentValueColumnX, this.headerColumnY, 'VALUE', this.columnHeaderStyle);
    this.add.text(this.currentOwnedColumnX, this.headerColumnY, 'OWNED', this.columnHeaderStyle);

    this.domainState.tradeCurrencies.forEach((currency, index) => {
      this.add.text(this.nameColumnX, 250 + (50 * index), currency.name, this.currencyStyle);

      const account = this.domainState.tradeAccounts.find((account) => account.currency.name === currency.name);

      const valueText = this.add.text(this.currentValueColumnX, 250 + (50 * index), currency.exchangeRate.toFixed(2), this.currencyStyle);
      const ownedText = this.add.text(this.currentOwnedColumnX, 250 + (50 * index),  account.balance.toFixed(2), this.currencyStyle);

      this.domainState.events.on(Domain.DomainEvents.accountBalanceChanged, () => {
        ownedText.setText(account.balance.toFixed(2));
      });

      this.domainState.events.on(Domain.DomainEvents.exchangeRatesChanged, () => {
        console.log(`Updating text for ${currency.name} --- text element: ${valueText}`);
        valueText.setText(currency.exchangeRate.toFixed(2));
      });

      const buyButton = this.add.text(this.buyColumnX, 250 + (50 * index), '+', this.currencyStyle).setInteractive({ cursor: 'pointer' });
      const sellButton = this.add.text(buyButton.x + 20, buyButton.y, '-', this.currencyStyle).setInteractive({ cursor: 'pointer' });

      buyButton.on('pointerdown', (pointer) => {
        console.log('buy buy buy!!!', this.domainState.rootAccount)
        Domain.recordTrade(this.domainState.rootAccount, account, this.domainState.rootAccount.currency.exchangeRate, account.currency.exchangeRate, this.domainState);
      });
      sellButton.on('pointerdown', (pointer) => {
        const exchangeRate = this.domainState.rootAccount.currency.exchangeRate / account.currency.exchangeRate;
        console.log('sellllllllllll!!!', this.domainState.rootAccount.currency.exchangeRate, account.currency.exchangeRate, exchangeRate)
        Domain.recordTrade(account, this.domainState.rootAccount, 1, exchangeRate, this.domainState);
        // Domain.recordTrade(this.domainState.rootAccount, account, -1, account.currency.exchangeRate, this.domainState);
      });

      this.currencyDisplay.push({ currencyName: currency.name, valueText });
    });

  }

  private createSellInterface = () => {
    const sellHeaderStyle = { fontSize: '32px', color: '#FF4444' };

    this.add.text(750, 100, 'SELL', sellHeaderStyle);
  }

  private storyQueue: string[] = [];
  private storyDisplays: Array<{ text: string, textObject: Phaser.GameObjects.Text, posX: number }> = [];
  private tickerX: number;
  private tickerY: number;

  private createNewsTicker(x: number, y: number) {
    this.tickerX = x;
    this.tickerY = y;
    this.add.text(x, y, 'BREAKING NEWS');
    this.domainState.events.on(Domain.DomainEvents.nationEventOccurred, (nation, event) => {
      this.addStory(`${nation.name} ${event.headline}`);
    });
    this.updateStories();
  }

  private readyToDisplayNextStory = true;

  private updateStories() {
    const y = this.tickerY + 20;
    const buildStory = this.readyToDisplayNextStory && (this.storyQueue.length > 0);
    if (buildStory) {
      const text = this.storyQueue.shift();
      this.storyDisplays.push({ textObject: this.add.text(window.innerWidth, y, text ), text, posX: window.innerWidth });
      this.readyToDisplayNextStory = false;
    }
    this.storyDisplays.forEach((story) => {
      story.textObject.destroy();
      story.posX -= 2;
      story.textObject = this.add.text(story.posX, y, story.text);
    });
    this.storyDisplays = this.storyDisplays.filter((story) => {
      const offScreen = story.textObject.displayWidth + story.posX < 0;
      if (offScreen) {
        story.textObject.destroy();
        return false;
      }
      return true;
    });
    const padding = 100;
    // console.log('piece1', );
    // console.log('piece2', )
    if (this.storyDisplays.length === 0 || _.last(this.storyDisplays).textObject.displayWidth + padding <  window.innerWidth - _.last(this.storyDisplays).posX) {
      this.readyToDisplayNextStory = true;
    }
  }

  private addStory(headline: string) {
    this.storyQueue.push(headline);
  }
}
