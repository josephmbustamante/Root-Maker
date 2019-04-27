const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
    createExchangeInterface(this);
  }

  public update() {
    // TODO
  }
}

interface Currency {
  name: string;
  currentValue: number;
  amountOwned: number;
}

const currencies: Currency[] = [
  { name: 'Dullers', currentValue: 43, amountOwned: 7 },
  { name: 'When', currentValue: 11, amountOwned: 992 },
  { name: 'Prawns', currentValue: 52, amountOwned: 0 },
  { name: 'Pestos', currentValue: 24, amountOwned: 83 },
];

const createExchangeInterface = (scene: Phaser.Scene) => {
  createBuyInterface(scene);
  createSellInterface(scene);
};

const createBuyInterface = (scene: Phaser.Scene) => {
  const buyHeaderStyle = { fontSize: '32px', color: '#44FF44' };
  const columnHeaderStyle = { fontSize: '24px', color: '#FFFFFF' };
  const currencyStyle = { fontSize: '20px', color: '#888888' };

  scene.add.text(150, 100, 'BUY', buyHeaderStyle);

  const nameColumnX = 100;
  const currentValueColumnX = 300;
  const buyColumnX = 450;

  const headerColumnY = 200;

  scene.add.text(nameColumnX, headerColumnY, 'NAME', columnHeaderStyle);
  const currentValueText = scene.add.text(currentValueColumnX, headerColumnY, 'VALUE', columnHeaderStyle);
  const valueX = currentValueText.width / 2;

  currencies.forEach((currency, index) => {
    scene.add.text(nameColumnX, 250 + (50 * index), currency.name, currencyStyle);
    scene.add.text(currentValueColumnX + valueX, 250 + (50 * index), `${currency.currentValue}`, currencyStyle);
    scene.add.text(buyColumnX, 250 + (50 * index), '+', currencyStyle);
  });
};

const createSellInterface = (scene: Phaser.Scene) => {
  const sellHeaderStyle = { fontSize: '32px', color: '#FF4444' };

  scene.add.text(750, 100, 'SELL', sellHeaderStyle);
};
