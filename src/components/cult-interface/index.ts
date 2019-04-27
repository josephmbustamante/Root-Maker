
export const createCultInterface = (scene: Phaser.Scene) => {
  const cultContainer = scene.add.container(0, 0);

  cultContainer.add(scene.add.text(300, 300, 'hello friends!'));

  return cultContainer;
};
