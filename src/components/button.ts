import * as Styles from 'src/shared/styles';

export const buttonTextHoverStyle = { fontSize: '14px', color: Styles.detailLightColor };
export const buttonTextRestStyle = { fontSize: '14px', color: Styles.buttonTextColor };

export const createRepeatableButton = (scene: Phaser.Scene, x: number, y: number, text: string, onClick: () => void, w?: number, h?: number) => {
  const button = createButton(scene, x, y, text, w, h);
  button.setOnClick(onClick);

  return button;
};

export const createOneTimeButton = (scene: Phaser.Scene, x: number, y: number, text: string, onClick: () => void, w?: number, h?: number) => {
  const button = createButton(scene, x, y, text, w, h);
  button.setOnClick(() => {
    onClick();
    button.setButtonAsInactive();
    button.removeButtonFeedbackListeners();
    button.changeText('BOUGHT');
  });

  return button;
};

const createButton = (scene: Phaser.Scene, x: number, y: number, text: string, w?: number, h?: number) => {
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
  const addButtonFeedbackListeners = () => {
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
  }

  addButtonFeedbackListeners();

  const removeButtonFeedbackListeners = () => {
    mouseHandlerBox.removeAllListeners();
  }

  const setButtonAsActive = () => {
    textElement.setStyle(buttonTextRestStyle);
    box.setFillStyle(Styles.backgroundColorHex)
    mouseHandlerBox.setInteractive({ useHandCursor: true });
  };
  const setButtonAsInactive = () => {
    textElement.setStyle(buttonTextHoverStyle);
    box.setFillStyle(Styles.buttonInactiveColorHex)
    mouseHandlerBox.disableInteractive();
  };

  const setOnClick = (onClick: () => void) => {
    mouseHandlerBox.on('pointerup', onClick);
  };

  const changeText = (text: string) => {
    textElement.setText(text);
    textElement.setX(((box.width - textElement.width) / 2) + box.x);
    textElement.setY(((box.height - textElement.height) / 2) + box.y);
  }

  return {
    elements: [
      box,
      textElement,
      topLine,
      leftLine,
      rightLine,
      bottomLine,
      mouseHandlerBox,
    ],
    setButtonAsActive,
    setButtonAsInactive,
    setOnClick,
    addButtonFeedbackListeners,
    removeButtonFeedbackListeners,
    changeText,
  }
};

export const hideOrShowButton = (elements:  (Phaser.GameObjects.Text | Phaser.GameObjects.Rectangle | Phaser.GameObjects.Line)[], visible: boolean) => {
  elements.forEach((element) => {
    element.setVisible(visible);
  });
}
