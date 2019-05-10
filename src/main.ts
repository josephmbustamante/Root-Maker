import * as Phaser from 'phaser';
import Scenes from './scenes';
import * as Styles from 'src/shared/styles';

const gameConfig: GameConfig = {
  title: 'Currency Trader',

  type: Phaser.AUTO,

  width: Styles.width,
  height: Styles.height,

  scene: Scenes,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  parent: 'game',
  backgroundColor: Styles.backgroundColor,
};

export const game = new Phaser.Game(gameConfig);
