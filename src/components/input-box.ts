import { addRectangle } from './rectangle';
import * as Styles from 'src/shared/styles';
import * as _ from 'lodash';

export const createInputBox = (scene: Phaser.Scene, x: number, y: number, callback: (text: string) => void, maxLength?: number) => {
  const textFieldState = {
    isEditable: false,
  };

  const rectangleElements = addRectangle(scene, x, y, Styles.inputBoxWidth, 30, Styles.foregroundColorHex);
  const cursor = scene.add.rectangle(x + 8, y + 5, 10, 20, Styles.textColorHex).setOrigin(0,0);
  cursor.setVisible(false);
  const inputBox = rectangleElements[0];
  inputBox.setInteractive();

  const textField = scene.add.text(x + 5, y + Styles.offset / 2, '', { color: Styles.textColor });

  scene.input.on('pointerup', (pointer, currentlyOver: any[]) => {
    console.log('pointer is up!', pointer, currentlyOver);
    textFieldState.isEditable = _.some(currentlyOver, (gameObject) => gameObject === inputBox || gameObject === textField);
    if (textFieldState.isEditable) {
      cursor.setVisible(true);
    } else {
      cursor.setVisible(false);
    }
    console.log(textFieldState.isEditable)
  });

  const maxCharacterLength = maxLength || Number.MAX_SAFE_INTEGER;

  // keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  // keyBackspace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
  scene.input.keyboard.on('keydown', (event) => {
    if (!textFieldState.isEditable) {
      return;
    }

    if (event.keyCode === 8 && textField.text.length > 0)
    {
      textField.text = textField.text.substr(0, textField.text.length - 1);
      cursor.setX(textField.x + textField.width + 3);
      callback(textField.text);
    }
    else if (textField.text.length < maxCharacterLength && (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)))
    {
      textField.text += event.key;
      cursor.setX(textField.x + textField.width + 3);
      callback(textField.text);
    }

    console.log(event);
  });
  return [
    ...rectangleElements,
    cursor,
    textField,
  ];
};
