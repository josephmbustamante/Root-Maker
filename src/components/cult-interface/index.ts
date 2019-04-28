import * as Domain from 'src/domain';
import * as Styles from 'src/shared/styles';
import * as Shared from 'src/shared';
import { addRectangle } from '../rectangle';
import { createButton } from '../button';

export const createCultInterface = (scene: Phaser.Scene) => {
  const cultContainer = scene.add.container(0, 0);

  createCultInfo(scene, cultContainer);
  createCultOptions(scene, cultContainer);
  createCultHappinessMeter(scene, cultContainer);
  createCultSuggestedDonationInput(scene, cultContainer);

  return cultContainer;
};

const cult = {
  followers: 134,
  capacity: 5482,
  followersPerSecond: 3,
  donationsPerSecond: 74,
}

const infoRowStyle = Styles.listItemStyle;

const infoRowTextX = 20;
const infoRowValueX = 450;

const infoRowStartY = Styles.cultPage.followerList.y + Styles.offset;

const createCultInfo = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add(addRectangle(scene,
    Styles.cultPage.followerList.x,
    Styles.cultPage.followerList.y,
    Styles.cultPage.followerList.width,
    Styles.cultPage.followerList.height,
    Styles.foregroundColorHex,
  ));

  container.add([
    scene.add.text(infoRowTextX, infoRowStartY, 'Followers', infoRowStyle),
    scene.add.text(infoRowValueX, infoRowStartY, `${cult.followers}`, infoRowStyle),

    scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 1), 'Capacity', infoRowStyle),
    scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 1), `${cult.capacity}`, infoRowStyle),

    scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 2), 'New Followers per Second', infoRowStyle),
    scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 2), `${cult.followersPerSecond}`, infoRowStyle),

    scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 3), 'Donations per Second', infoRowStyle),
    scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 3), `${cult.donationsPerSecond}`, infoRowStyle),
  ]);
};

const optionsRowTextX = Styles.cultPage.options.labelX;
const optionsRowButtonX = Styles.cultPage.options.buttonX;

const optionsRowStartY = Styles.cultPage.followerList.y + Styles.offset;
const buttonOffsetHeight = Styles.cultPage.options.buttonOffsetHeight;

const createCultOptions = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(optionsRowTextX,Styles.offset + optionsRowStartY, 'Build Promotional Website', Styles.cultPage.options.labelStyle),
    ...createButton(scene, optionsRowButtonX, optionsRowStartY, '1,000,000', () => { }),

    scene.add.text(optionsRowTextX,Styles.offset + optionsRowStartY + buttonOffsetHeight * 1, 'Construct Church', Styles.cultPage.options.labelStyle),
    ...createButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 1, '3,000,000', () => { }),

    scene.add.text(optionsRowTextX,Styles.offset + optionsRowStartY + buttonOffsetHeight * 2, 'Build Complex', Styles.cultPage.options.labelStyle),
    ...createButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 2, '15,000,000', () => { }),
  ]);

};

const createCultHappinessMeter = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(Styles.cultPage.happiness.x, Styles.cultPage.happiness.labelY, 'Follower Happiness', Styles.cultPage.options.labelStyle),
    ...addRectangle(scene, Styles.cultPage.happiness.x, Styles.cultPage.happiness.meterY, Styles.cultPage.happiness.meterWidth, Styles.cultPage.happiness.meterHeight, Styles.foregroundColorHex),
  ]);
};

const createCultSuggestedDonationInput = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(Styles.cultPage.donation.labelX, Styles.cultPage.donation.y, 'Suggested Weekly Donation', Styles.cultPage.options.labelStyle),
    scene.add.text(Styles.cultPage.donation.inputX, Styles.cultPage.donation.y, '2,000', Styles.listItemStyle),
  ]);
};
