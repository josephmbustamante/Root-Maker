import * as Styles from 'src/shared/styles';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Boot',
};

/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
export class BootScene extends Phaser.Scene {
  loadingFontStyle = { fontSize: '24px', color: Styles.textColor };

  constructor() {
    super(sceneConfig);
  }

  private getGameWidth = () => {
    return this.game.scale.width;
  };

  private getGameHeight = () => {
    return this.game.scale.height;
  };


  public preload() {
    const halfWidth = this.getGameWidth() * 0.5;
    const halfHeight = this.getGameHeight() * 0.5;

    const progressBarHeight = 100;
    const progressBarWidth = 400;

    const progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, Styles.foregroundColorHex);
    const progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, Styles.textColorHex);

    const loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...', this.loadingFontStyle);
    const percentText = this.add.text(halfWidth - 25, halfHeight, '0%', this.loadingFontStyle);
    const assetText = this.add.text(halfWidth - 150, halfHeight + 100, '', this.loadingFontStyle);

    this.load.on('progress', (value) => {
      progressBar.width = (progressBarWidth - 30) * value;

      const percent = value * 100;
      percentText.setText(`${percent}%`);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(file.key);
    });

    this.load.on('complete', () => {
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      progressBar.destroy();
      progressBarContainer.destroy();

      this.scene.start('MainMenu');
    });

    this.loadAssets();
  }

  /**
   * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
   * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
   * is currently active, so they can be accessed anywhere.
   */
  private loadAssets() {
    this.load.image('trend-up', 'assets/trend-up.svg');
    this.load.image('trend-down', 'assets/trend-down.svg');
    this.load.image('logo-png', 'assets/logo.png');
    this.load.image('logo-svg', 'assets/logo.svg');
    this.load.audio('root-maker-music-1', 'assets/root-maker-music-1.mp3');
  }
}
