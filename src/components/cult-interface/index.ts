import * as Domain from 'src/domain';
import * as Styles from 'src/shared/styles';
import * as Shared from 'src/shared';
import { addRectangle } from '../rectangle';

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

const optionsTextStyle = { fontSize: '16px', color: '#FFFFFF' };

const optionsRowTextX = Styles.cultPage.followerList.width + Styles.offset * 2;
const optionsRowButtonX = 850;

const optionsRowStartY = Styles.cultPage.followerList.y + Styles.offset;

const createCultOptions = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(optionsRowTextX, optionsRowStartY, 'Build Promotional Website', optionsTextStyle),
    scene.add.text(optionsRowButtonX, optionsRowStartY, 'R 1,000,000', optionsTextStyle),

    scene.add.text(optionsRowTextX, optionsRowStartY + Styles.lineItemHeight * 1, 'Construct Church', optionsTextStyle),
    scene.add.text(optionsRowButtonX, optionsRowStartY + Styles.lineItemHeight * 1, 'R 3,000,000', optionsTextStyle),

    scene.add.text(optionsRowTextX, optionsRowStartY + Styles.lineItemHeight * 2, 'Build Complex', optionsTextStyle),
    scene.add.text(optionsRowButtonX, optionsRowStartY + Styles.lineItemHeight * 2, 'R 15,000,000', optionsTextStyle),
  ]);

};

const cultHappinessX = 550;

const cultHappinessTextY = 450;
const cultHappinessMeterY = 500;

const createCultHappinessMeter = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(cultHappinessX, cultHappinessTextY, 'Follower Happiness'),
    scene.add.rectangle(cultHappinessX, cultHappinessMeterY, 400, 50, 0x888888).setOrigin(0, 0),
  ]);
};

const donationInputTextX = 550;
const donationInputButtonX = 850;

const donationInputY = 650;

const createCultSuggestedDonationInput = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(donationInputTextX, donationInputY, 'Suggested Weekly Donation'),
    scene.add.text(donationInputButtonX, donationInputY, 'R 2,000'),
  ]);
};
