import * as Domain from 'src/domain';
import * as Shared from 'src/shared';

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

const infoRowStyle = { fontSize: '16px', color: '#888888' };

const infoRowTextX = 50;
const infoRowValueX = 450;

const infoRowStartY = 100;
const infoRowHeight = 50;

const createCultInfo = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(infoRowTextX, infoRowStartY, 'Followers', infoRowStyle),
    scene.add.text(infoRowValueX, infoRowStartY, `${cult.followers}`, infoRowStyle),

    scene.add.text(infoRowTextX, infoRowStartY + (infoRowHeight * 1), 'Capacity', infoRowStyle),
    scene.add.text(infoRowValueX, infoRowStartY + (infoRowHeight * 1), `${cult.capacity}`, infoRowStyle),

    scene.add.text(infoRowTextX, infoRowStartY + (infoRowHeight * 2), 'New Followers per Second', infoRowStyle),
    scene.add.text(infoRowValueX, infoRowStartY + (infoRowHeight * 2), `${cult.followersPerSecond}`, infoRowStyle),

    scene.add.text(infoRowTextX, infoRowStartY + (infoRowHeight * 3), 'Donations per Second', infoRowStyle),
    scene.add.text(infoRowValueX, infoRowStartY + (infoRowHeight * 3), `${cult.donationsPerSecond}`, infoRowStyle),
  ]);
};

const optionsTextStyle = { fontSize: '16px', color: '#FFFFFF' };

const optionsRowTextX = 550;
const optionsRowButtonX = 850;

const optionsRowStartY = 100;

const createCultOptions = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(optionsRowTextX, optionsRowStartY, 'Build Promotional Website', optionsTextStyle),
    scene.add.text(optionsRowButtonX, optionsRowStartY, 'R 1,000,000', optionsTextStyle),

    scene.add.text(optionsRowTextX, optionsRowStartY + infoRowHeight * 1, 'Construct Church', optionsTextStyle),
    scene.add.text(optionsRowButtonX, optionsRowStartY + infoRowHeight * 1, 'R 3,000,000', optionsTextStyle),

    scene.add.text(optionsRowTextX, optionsRowStartY + infoRowHeight * 2, 'Build Complex', optionsTextStyle),
    scene.add.text(optionsRowButtonX, optionsRowStartY + infoRowHeight * 2, 'R 15,000,000', optionsTextStyle),
  ]);

};

const cultHappinessX = 550;

const cultHappinessTextY = 500;
const cultHappinessMeterY = 550;

const createCultHappinessMeter = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(cultHappinessX, cultHappinessTextY, 'Follower Happiness', optionsTextStyle),
    scene.add.rectangle(cultHappinessX, cultHappinessMeterY, 400, 50, 0x888888).setOrigin(0, 0),
  ]);
};

const createCultSuggestedDonationInput = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {

};
