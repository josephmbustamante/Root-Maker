import * as Styles from 'src/shared/styles';

export const addHorizontalScreenLine = (scene: Phaser.Scene, y: number) => {
  scene.add.line(0, 0, 0, y + 1, Styles.width, y + 1, Styles.detailLightColorHex).setOrigin(0, 0);
  scene.add.line(0, 0, 0, y, Styles.width, y, Styles.detailDarkColorHex).setOrigin(0, 0);
}
