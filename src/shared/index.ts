export const getGameWidth = (scene: Phaser.Scene) => {
  return scene.game.scale.width;
};

export const getGameHeight = (scene: Phaser.Scene) => {
  return scene.game.scale.height;
};

export const formatNumberForDisplay = (n: number | string): string => {
  const num = parseFloat(`${n}`);
  if (isNaN(num)) {
    return '';
  }
  return (Math.floor(num * 100.0) / 100).toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).substring(1);
};
