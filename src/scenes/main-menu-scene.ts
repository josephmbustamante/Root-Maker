import * as Styles from 'src/shared/styles';
import * as Shared from 'src/shared';
import { MainMenuButton } from 'src/components/main-menu-button';
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
    const usernameTextX = 400;
    const usernameFieldX = 500;
    const loginX = 450;

    const logoY = 200;
    const usernameY = 500;
    const loginY = 550;

    this.add.image(logoX, logoY, 'logo-svg').setOrigin(0, 0);

    this.add.text(usernameTextX, usernameY + 5, 'Username:');
    createInputBox(this, usernameFieldX, usernameY, (text: string) => this.username = text, 12);

    new MainMenuButton(this, loginX, loginY, 'LOGIN', () => {
      this.scene.start('Game', { username: this.username });
    });
  }
}
