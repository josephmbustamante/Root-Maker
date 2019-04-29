import * as Styles from 'src/shared/styles';
const buttonRestStyle = {
  fill: '#FFFFFF',
};

const buttonHoverStyle = {
  fill: '#7CFC00',
};

const buttonActiveStyle = {
  fill: '#888888',
};

export class Button extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene, x: number, y: number, text: string, onClick?: () => void) {
    super(scene, x, y, text, buttonRestStyle);
    scene.add.existing(this);

    this.setInteractive({ useHandCursor: true })
      .on('pointerover', this.enterMenuButtonHoverState)
      .on('pointerout', this.enterMenuButtonRestState)
      .on('pointerdown', this.enterMenuButtonActiveState)
      .on('pointerup', this.enterMenuButtonHoverState);

    if (onClick) {
      this.on('pointerup', onClick);
    }
  }

  private enterMenuButtonHoverState() {
    this.setStyle(buttonHoverStyle);
  }

  private enterMenuButtonRestState() {
    this.setStyle(buttonRestStyle);
  }

  private enterMenuButtonActiveState() {
    this.setStyle(buttonActiveStyle);
  }
}

export const buttonTextHoverStyle = { fontSize: '14px', color: Styles.detailLightColor };
export const buttonTextRestStyle = { fontSize: '14px', color: Styles.buttonTextColor };

export const createButton = (scene: Phaser.Scene, x: number, y: number, text: string, onClick: () => void, w?: number, h?: number) => {
  const textElement = scene.add.text(x, y, text, buttonTextRestStyle).setOrigin(0, 0);
  const width = w || textElement.width + Styles.offset * 2;
  const height = h || textElement.height + Styles.offset * 2;

  const box = scene.add.rectangle(x, y, width, height, Styles.backgroundColorHex).setOrigin(0, 0);
  const topLine = scene.add.line(0, 0, x - 1, y, x + width, y, Styles.detailLightColorHex).setOrigin(0, 0);
  const leftLine = scene.add.line(0, 0, x, y - 1, x, y + height + 1, Styles.detailLightColorHex).setOrigin(0, 0);
  const rightLine = scene.add.line(0, 0, x + width, y - 1, x + width, y + height + 1, Styles.detailDarkColorHex).setOrigin(0, 0);
  const bottomLine = scene.add.line(0, 0, x + 1, y + height, x + width, y + height, Styles.detailDarkColorHex).setOrigin(0, 0);

  textElement.setDepth(1);

  textElement.setX(((box.width - textElement.width) / 2) + box.x);
  textElement.setY(((box.height - textElement.height) / 2) + box.y);

  const mouseHandlerBox = scene.add.rectangle(x, y, width, height, Styles.backgroundColorHex, 0).setOrigin(0, 0).setInteractive({ useHandCursor: true });
  mouseHandlerBox.on('pointerover', () => {
    textElement.setStyle(buttonTextHoverStyle)
    box.setFillStyle(Styles.backgroundColorHex)
  });
  mouseHandlerBox.on('pointerout', () => {
    textElement.setStyle(buttonTextRestStyle)
    box.setFillStyle(Styles.backgroundColorHex)
  });
  mouseHandlerBox.on('pointerdown', () => {
    textElement.setStyle(buttonTextHoverStyle)
    box.setFillStyle(Styles.detailDarkColorHex)

  });
  mouseHandlerBox.on('pointerupoutside', () => {
    textElement.setStyle(buttonTextHoverStyle);
    box.setFillStyle(Styles.backgroundColorHex)

  });
  mouseHandlerBox.on('pointerup', () => {
    textElement.setStyle(buttonTextHoverStyle);
    box.setFillStyle(Styles.backgroundColorHex)

  });
  mouseHandlerBox.on('pointerup', onClick);

  return [
    box,
    textElement,
    topLine,
    leftLine,
    rightLine,
    bottomLine,
    mouseHandlerBox,
  ];
};

export const hideOrShowButton = (elements:  (Phaser.GameObjects.Text | Phaser.GameObjects.Rectangle | Phaser.GameObjects.Line)[], visible: boolean) => {
  elements.forEach((element) => {
    element.setVisible(visible);
  });
}
