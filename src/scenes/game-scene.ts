const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

interface Currency {
  name: string;
  currentValue: number;
  amountOwned: number;
}

export class GameScene extends Phaser.Scene {
  currencies: Currency[];
  currencyDisplay: Array<{ currencyName: string, valueText: Phaser.GameObjects.Text }>;

  buyHeaderStyle = { fontSize: '32px', color: '#44FF44' };
  columnHeaderStyle = { fontSize: '24px', color: '#FFFFFF' };
  currencyStyle = { fontSize: '20px', color: '#888888' };
  nameColumnX = 100;
  currentValueColumnX = 300;
  buyColumnX = 450;

  headerColumnY = 200;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.currencies = [
      { name: 'Dullers', currentValue: 43, amountOwned: 7 },
      { name: 'When', currentValue: 11, amountOwned: 992 },
      { name: 'Prawns', currentValue: 52, amountOwned: 0 },
      { name: 'Pestos', currentValue: 24, amountOwned: 83 },
    ];

    this.currencyDisplay = [];

    this.createExchangeInterface(this);
  }

  public update() {
    // randomly change currency values to test
    this.currencies.forEach((currency) => {
      const amount = Math.random() *  11;
      const shouldBeNegative = Math.random() < 0.4;

      const amountToChange = Math.floor(shouldBeNegative ? -amount : amount);

      currency.currentValue += amountToChange;
    });

    this.updateCurrencyDisplay();
  }

  private updateCurrencyDisplay() {
    if (this.currencyDisplay.length > 0) {
      this.currencyDisplay.forEach((display, index) => {
        const correspondingCurrency = this.currencies[index]; // TODO - make this better
        display.valueText.setText(`${correspondingCurrency.currentValue}`);
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

    this.currencies.forEach((currency, index) => {
      this.add.text(this.nameColumnX, 250 + (50 * index), currency.name, this.currencyStyle);
      const valueText = this.add.text(this.currentValueColumnX, 250 + (50 * index), `${currency.currentValue}`, this.currencyStyle);
      this.add.text(this.buyColumnX, 250 + (50 * index), '+', this.currencyStyle);

      this.currencyDisplay.push({ currencyName: currency.name, valueText });
    });

  }

  private createSellInterface = () => {
    const sellHeaderStyle = { fontSize: '32px', color: '#FF4444' };

    this.add.text(750, 100, 'SELL', sellHeaderStyle);
  }
}
