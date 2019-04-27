
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
    this.add.image(window.innerWidth, window.innerHeight, 'sample');
  }

  public update() {
    // TODO
  }
}
