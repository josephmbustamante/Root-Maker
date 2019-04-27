import * as Domain from '../domain';

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
  buyColumnX = 450;

  headerColumnY = 200;

  domainTickTime = 2000; // milliseconds
  timeSinceLastTick = 0;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    const currencyNames = [
      'Dullers',
      'When',
      'Prawns',
      'Pestos',
    ];

    this.domainState = Domain.initState('root', 100, currencyNames);

    this.currencyDisplay = [];

    this.createExchangeInterface();

    // this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'sample');
    this.createNewsTicker(0, 0);
  }

  public update(time, delta) {
    // this.updateCurrencyDisplay();

    this.timeSinceLastTick += delta;

    if (this.timeSinceLastTick >= this.domainTickTime) {
      console.log('tick!');
      this.timeSinceLastTick = 0;
      Domain.runCurrencyFluctuations(this.domainState, this.events);

      const testAccount = this.domainState.tradeAccounts[0];
      Domain.recordTrade(this.domainState.rootAccount, testAccount, 1, testAccount.currency.exchangeRate, this.domainState.tradeLedger, this.events);
      // TODO
      this.addStory(`Story ${this.counter}`);
      this.counter++;
      this.updateStories();
    }

  }

  private createExchangeInterface = () => {
    this.createBuyInterface();
    this.createSellInterface();

    this.createInfoInterface();
  }

  private createInfoInterface() {
    const rootInfoText = this.add.text(this.nameColumnX, 800, 'Root:', this.columnHeaderStyle);
    const rootValueText = this.add.text(rootInfoText.x + rootInfoText.width + 20, 800, `${this.domainState.rootAccount.balance}`, this.columnHeaderStyle);

    this.events.on(Domain.DomainEvents.accountBalanceChanged, ({ source, destination }: { source: Domain.Account, destination: Domain.Account }) => {
      console.log('updating root', source.name, source.balance, destination.name, destination.balance)
      rootValueText.setText(this.domainState.rootAccount.balance.toFixed(2));
    });
  }

  private createBuyInterface = () => {

    this.add.text(150, 100, 'BUY', this.buyHeaderStyle);


    this.add.text(this.nameColumnX, this.headerColumnY, 'NAME', this.columnHeaderStyle);
    this.add.text(this.currentValueColumnX, this.headerColumnY, 'VALUE', this.columnHeaderStyle);

    this.domainState.tradeCurrencies.forEach((currency, index) => {
      this.add.text(this.nameColumnX, 250 + (50 * index), currency.name, this.currencyStyle);

      const valueText = this.add.text(this.currentValueColumnX, 250 + (50 * index), currency.exchangeRate.toFixed(2), this.currencyStyle);
      this.events.on(Domain.DomainEvents.exchangeRatesChanged, () => {
        console.log(`Updating text for ${currency.name} --- text element: ${valueText}`);
        valueText.setText(currency.exchangeRate.toFixed(2));
      });

      this.add.text(this.buyColumnX, 250 + (50 * index), '+', this.currencyStyle);

      this.currencyDisplay.push({ currencyName: currency.name, valueText });
    });

  }

  private createSellInterface = () => {
    const sellHeaderStyle = { fontSize: '32px', color: '#FF4444' };

    this.add.text(750, 100, 'SELL', sellHeaderStyle);
  }

  private counter = 0;
  private stories: string[] = [
  ];
  private storyDisplays: Phaser.GameObjects.Text[] = [];
  private maxStories = 10;
  private tickerX: number;
  private tickerY: number;
  private createNewsTicker(x: number, y: number) {
    this.tickerX = x;
    this.tickerY = y;
    this.add.text(x, y, 'BREAKING NEWS');
    this.updateStories();
  }
  private updateStories() {
    const spacing = 20;
    const x = this.tickerX + spacing;
    const y = this.tickerY + spacing;
    this.storyDisplays.forEach((story) => {
      story.destroy();
    })
    this.storyDisplays = [];
    this.stories.forEach((story, index) => {
      this.storyDisplays.push(this.add.text(x, y + (spacing * index) , story));
    });
  }

  private addStory(headline: string) {
    if (this.stories.length === 10) {
      this.stories.pop();
    }
    this.stories.unshift(headline);
  }
}
