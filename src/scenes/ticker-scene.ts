
const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Ticker',
};

export class TickerScene extends Phaser.Scene {
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
