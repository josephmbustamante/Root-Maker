import * as Styles from 'src/shared/styles';
import { createButton } from 'src/components/button';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Story',
};

export class StoryScene extends Phaser.Scene {
  loadingFontStyle = { fontSize: '24px', color: Styles.textColor };
  username: string = '';

  constructor() {
    super(sceneConfig);
  }

  init(data: { username: string }) {
    this.username = data.username;
  }

  create() {
    createButton(this, 800, 600, 'START GAME', () => {
      this.scene.start('Game', { username: this.username });
    });
  }
}
