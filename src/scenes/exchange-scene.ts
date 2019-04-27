
const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Exchange',
};

export class ExchangeScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.add.image(0, 0, 'sample');
  }

  public update() {
    // TODO
  }
}
