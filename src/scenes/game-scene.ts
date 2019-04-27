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
  scene.add.text(150, 100, 'BUY');

  const nameColumnX = 100;
  const currentValueColumnX = 300;
  const headerColumnY = 200;

  scene.add.text(nameColumnX, headerColumnY, 'Name');
  const currentValueText = scene.add.text(currentValueColumnX, headerColumnY, 'Current Value');
  const valueX = currentValueText.width / 2;

  currencies.forEach((currency, index) => {
    scene.add.text(nameColumnX, 300 + (50 * index), currency.name);
    scene.add.text(currentValueColumnX + valueX, 300 + (50 * index), `${currency.currentValue}`);
  });
};

const createSellInterface = (scene: Phaser.Scene) => {
  scene.add.text(750, 100, 'SELL');
};
