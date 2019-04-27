import * as Domain from 'src/domain';
import * as Shared from 'src/shared';

export const createCultInterface = (scene: Phaser.Scene) => {
  const cultContainer = scene.add.container(0, 0);

  createCultInfo(scene, cultContainer);
  createCultOptions(scene, cultContainer);

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
const infoRowValueX = 500;

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

const createCultOptions = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {

};
