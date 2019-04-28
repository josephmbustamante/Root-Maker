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

export const buttonTextRestStyle = { fontSize: '14px', color: Styles.buttonTextColorHex };

export const createButton = (scene: Phaser.Scene, x: number, y: number, width: number, height: number, text: string, onClick: () => void) => {

  const box = scene.add.rectangle(x, y, width, height, Styles.backgroundColorHex).setOrigin(0,0).setInteractive({ useHandCursor: true });
  const textElement = scene.add.text(x, y, text, buttonTextRestStyle).setOrigin(0,0).setInteractive({ useHandCursor: true });
  const topLine = scene.add.line(0, 0, x - 1, y, x + width, y, Styles.detailLightColorHex).setOrigin(0, 0).setInteractive({ useHandCursor: true });
  const leftLine = scene.add.line(0, 0, x, y - 1, x, y + height + 1, Styles.detailLightColorHex).setOrigin(0, 0).setInteractive({ useHandCursor: true });
  const rightLine = scene.add.line(0, 0, x + width, y - 1, x + width, y + height + 1, Styles.detailDarkColorHex).setOrigin(0, 0).setInteractive({ useHandCursor: true });
  const bottomLine = scene.add.line(0, 0, x + 1, y + height, x + width, y + height, Styles.detailDarkColorHex).setOrigin(0, 0).setInteractive({ useHandCursor: true });
  const mouseHandlerBox = scene.add.rectangle(x, y, width, height, Styles.backgroundColorHex).setOrigin(0,0).setInteractive({ useHandCursor: true });

  return [
    box,
    textElement,
    topLine,
    leftLine,
    rightLine,
    bottomLine,
  ];
};
