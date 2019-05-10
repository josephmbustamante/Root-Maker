import * as Styles from 'src/shared/styles';
import { createRepeatableButton } from 'src/components/button';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Story',
};

export class StoryScene extends Phaser.Scene {
  storyFontStyle = { fontSize: '16px', color: Styles.foregroundColor };
  storyTextElements: Phaser.GameObjects.Text[];
  currentLineIndex = 0;
  currentCharacterIndex = 0;
  framesSinceLastCharacter = 0;

  username: string = '';

  music: Phaser.Sound.BaseSound;

  constructor() {
    super(sceneConfig);
  }

  init(data: { username: string }) {
    this.username = data.username;
  }

  create() {
    this.storyTextElements = this.storyText.map((textLine, index) => {
      return this.add.text(25, 100 + (30 * index), '', this.storyFontStyle);
    });

    createRepeatableButton(this, 800, 600, 'BEGIN', () => {
      this.scene.start('Game', { username: this.username, backgroundMusic: this.music });
    });

    this.music = this.sound.add('root-maker-music-1', { loop: true, volume: 1 });
    this.music.play();
    this.sound.pauseOnBlur = false;
  }

  update() {
    // Set an amount of frames necessary to add a new character.
    // Gives the effect of slower typing.
    if (this.framesSinceLastCharacter < 4) {
      this.framesSinceLastCharacter++;
      return;
    }

    const previousLine = this.storyTextElements[this.currentLineIndex];

    if (previousLine) {
      // See if we finished with the previous line, and if so, move on to the next.
      if (this.currentCharacterIndex >= this.storyText[this.currentLineIndex].length) {
        this.currentLineIndex++;
        this.currentCharacterIndex = 0;
      }

      const currentLine = this.storyTextElements[this.currentLineIndex];

      if (currentLine) {
        const nextCharacter = this.storyText[this.currentLineIndex].charAt(this.currentCharacterIndex);

        currentLine.setText(currentLine.text + nextCharacter);
        this.currentCharacterIndex++;
      }
    }
  }

  storyText = [
    'You have just been hired as a currency trader. Congratulations!',
    'Currency is now your life.',
    '',
    'Welcome to Root Maker©, the greatest currency exchange software ever created.',
    'Root Maker© will guide you to unprecedented success in your new career.',
    'The software rewards high performers.',
    'If you are successful, Root Maker© will allow you to do things you never thought possible.',
    '',
    'Remember: money is the root of all good things, and Root is the best type of money there is.',
    '',
    'Click the button below to begin.',
  ];
}
