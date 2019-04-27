import * as Domain from '../domain/trading';

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

    this.createExchangeInterface(this);

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
    }

    // TODO
    this.addStory(`Story ${this.counter}`);
    this.counter++;
    this.updateStories();
  }

  private updateCurrencyDisplay() {
    if (this.currencyDisplay.length > 0) {
      this.currencyDisplay.forEach((display, index) => {
        const correspondingCurrency = this.domainState.tradeCurrencies[index]; // TODO - make this better
        display.valueText.setText(`${correspondingCurrency.exchangeRate}`);
      });
    }
  }

  private createExchangeInterface = (scene: Phaser.Scene) => {
    this.createBuyInterface();
    this.createSellInterface();
  }

  private createBuyInterface = () => {

    this.add.text(150, 100, 'BUY', this.buyHeaderStyle);


    this.add.text(this.nameColumnX, this.headerColumnY, 'NAME', this.columnHeaderStyle);
    this.add.text(this.currentValueColumnX, this.headerColumnY, 'VALUE', this.columnHeaderStyle);

    this.domainState.tradeCurrencies.forEach((currency, index) => {
      this.add.text(this.nameColumnX, 250 + (50 * index), currency.name, this.currencyStyle);

      const valueText = this.add.text(this.currentValueColumnX, 250 + (50 * index), `${currency.exchangeRate}`, this.currencyStyle);
      this.events.on(Domain.DomainEvents.exchangeRatesChanged, () => {
        console.log(`Updating text for ${currency.name} --- text element: ${valueText}`);
        valueText.setText(`${currency.exchangeRate}`)
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
