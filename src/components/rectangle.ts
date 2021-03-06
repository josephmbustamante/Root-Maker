import * as Styles from 'src/shared/styles';

export const addRectangle = (scene: Phaser.Scene, x: number, y: number, width: number, height: number, fillColor: number, fillAlpha?: number) => {
  const box = scene.add.rectangle(x, y, width, height, fillColor, fillAlpha).setOrigin(0,0);
  const topLine = scene.add.line(0, 0, x - 1, y, x + width, y, Styles.detailDarkColorHex).setOrigin(0, 0);
  const leftLine = scene.add.line(0, 0, x, y - 1, x, y + height + 1, Styles.detailDarkColorHex).setOrigin(0, 0);
  const rightLine = scene.add.line(0, 0, x + width, y - 1, x + width, y + height + 1, Styles.detailLightColorHex).setOrigin(0, 0);
  const bottomLine = scene.add.line(0, 0, x + 1, y + height, x + width, y + height, Styles.detailLightColorHex).setOrigin(0, 0);

  return [
    box,
    topLine,
    leftLine,
    rightLine,
    bottomLine,
  ];
}
