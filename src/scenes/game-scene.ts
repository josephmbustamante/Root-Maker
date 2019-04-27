
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
    this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'sample');
  }

  public update() {
    // TODO
  }
}
