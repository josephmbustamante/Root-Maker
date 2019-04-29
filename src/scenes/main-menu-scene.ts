import * as Styles from 'src/shared/styles';
import * as Shared from 'src/shared';
import { createButton } from 'src/components/button';
import { createInputBox } from 'src/components/input-box';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'MainMenu',
};

export class MainMenuScene extends Phaser.Scene {
  private username: string = '';

  constructor() {
    super(sceneConfig);
  }

  public create() {
    const logoX = 300;
    const usernameTextX = 375;
    const usernameFieldX = 475;
    const loginButtonWidth = 100;
    const loginX = (Styles.width / 2) - loginButtonWidth / 2;
    const loginY = 500;

    const logoY = 200;
    const usernameY = 400;

    this.add.image(logoX, logoY, 'logo-svg').setOrigin(0, 0);

    this.add.text(usernameTextX, usernameY + 5, 'USERNAME:');
    createInputBox(this, usernameFieldX, usernameY, (text: string) => this.username = text, 12);

    const onClick = () => {
      this.scene.start('Game', { username: this.username });
    };
    createButton(this, loginX, loginY, 'LOGIN', onClick, loginButtonWidth)
  }
}
