
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

const createExchangeInterface = (scene: Phaser.Scene) => {
  createBuyInterface(scene);
  createSellInterface(scene);
};

const createBuyInterface = (scene: Phaser.Scene) => {
  scene.add.text(100, 50, 'Buy');
};

const createSellInterface = (scene: Phaser.Scene) => {
  scene.add.text(400, 50, 'Sell');
};
