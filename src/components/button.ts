import * as Styles from 'src/shared/styles';

export const buttonTextHoverStyle = { fontSize: '14px', color: Styles.detailLightColor };
export const buttonTextRestStyle = { fontSize: '14px', color: Styles.buttonTextColor };

export const createRepeatableButton = (scene: Phaser.Scene, x: number, y: number, text: string, onClick: () => void, w?: number, h?: number) => {
  const button = createButton(scene, x, y, text, w, h);
  button.setOnClick(onClick);

  return button;
};

export const createOneTimeButton = (scene: Phaser.Scene, x: number, y: number, text: string, onClick: () => boolean, w?: number, h?: number) => {
  const button = createButton(scene, x, y, text, w, h);
  button.setOnClick(() => {
    const success = onClick();
    if (success) {
      button.setButtonAsInactive();
      button.changeText('BOUGHT');
    }
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

  let ready = true;

  const mouseHandlerBox = scene.add.rectangle(x, y, width, height, Styles.backgroundColorHex, 0).setOrigin(0, 0).setInteractive({ useHandCursor: true });
  mouseHandlerBox.on('pointerover', () => {
    if (ready) {
      textElement.setStyle(buttonTextHoverStyle)
      box.setFillStyle(Styles.backgroundColorHex)
    }
  });
  mouseHandlerBox.on('pointerout', () => {
    if (ready) {
      textElement.setStyle(buttonTextRestStyle)
      box.setFillStyle(Styles.backgroundColorHex)
    }
  });
  mouseHandlerBox.on('pointerdown', () => {
    if (ready) {
      textElement.setStyle(buttonTextHoverStyle)
      box.setFillStyle(Styles.detailDarkColorHex)
    }
  });
  mouseHandlerBox.on('pointerup', () => {
    if (ready) {
      textElement.setStyle(buttonTextHoverStyle);
      box.setFillStyle(Styles.backgroundColorHex)
    }
  });

  const removeButtonFeedbackListeners = () => {
    mouseHandlerBox.removeAllListeners();
  }

  const setButtonAsActive = () => {
    ready = true;
    mouseHandlerBox.setInteractive({ useHandCursor: true });
    textElement.setStyle(buttonTextRestStyle);
    box.setFillStyle(Styles.backgroundColorHex)
  };
  const setButtonAsInactive = () => {
    ready = false;
    mouseHandlerBox.disableInteractive();
    textElement.setStyle(buttonTextHoverStyle);
    box.setFillStyle(Styles.buttonInactiveColorHex)
  };

  const setOnClick = (onClick: () => void) => {
    mouseHandlerBox.on('pointerup', () => {
      if (ready) {
        onClick();
      }
    });
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
    changeText,
    ready,
  }
};

export const hideOrShowButton = (elements:  (Phaser.GameObjects.Text | Phaser.GameObjects.Rectangle | Phaser.GameObjects.Line)[], visible: boolean) => {
  elements.forEach((element) => {
    element.setVisible(visible);
  });
}
