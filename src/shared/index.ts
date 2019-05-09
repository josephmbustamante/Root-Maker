export const getGameWidth = (scene: Phaser.Scene) => {
  return scene.game.scale.width;
};

export const getGameHeight = (scene: Phaser.Scene) => {
  return scene.game.scale.height;
};

const NUMBER_SUFFIX_MAPPINGS = [
  { number: 1000000, suffix: 'M' },
  { number: 1000000000, suffix: 'B' },
  { number: 1000000000000, suffix: 'T' },
  { number: 1000000000000000, suffix: 'Qa' },
  { number: 1000000000000000000, suffix: 'Qi' },
  { number: 1000000000000000000000, suffix: 'Sx' },
  { number: 1000000000000000000000000, suffix: 'Sp' },
  { number: 1000000000000000000000000000, suffix: 'Oc' },
  { number: 1000000000000000000000000000000, suffix: 'No' },
  { number: 1000000000000000000000000000000000, suffix: 'Dc' },
  { number: 1000000000000000000000000000000000000, suffix: 'UnDc' },
  { number: 1000000000000000000000000000000000000000, suffix: 'DuDc' },
  { number: 1000000000000000000000000000000000000000000, suffix: 'TrDc' },
  { number: 1000000000000000000000000000000000000000000000, suffix: 'QaDc' },
  { number: 1000000000000000000000000000000000000000000000000, suffix: 'QuDc' },
  { number: 1000000000000000000000000000000000000000000000000000, suffix: 'SxDc' },
  { number: 1000000000000000000000000000000000000000000000000000000, suffix: 'SpDc' },
  { number: 1000000000000000000000000000000000000000000000000000000000, suffix: 'OcDc' },
  { number: 1000000000000000000000000000000000000000000000000000000000000, suffix: 'NoDc' },
];

const addSuffixToNumber = (n: number): string => {
  // If the number is small enough to just display, then return that.
  if (n < NUMBER_SUFFIX_MAPPINGS[0].number) {
    return formatNumberAsCurrencyString(n);
  }

  for (let i = 1; i < NUMBER_SUFFIX_MAPPINGS.length; i++) {
    const previousSuffix = NUMBER_SUFFIX_MAPPINGS[i - 1];
    const nextSuffix = NUMBER_SUFFIX_MAPPINGS[i];

    if (n - nextSuffix.number < 0) {
      // A number with a suffix should only have at most 3 numbers on the left of the decimal, so we decide by the amount
      // corresponding to the suffix to make sure that's the case
      const numberDividedBySuffixAmount = 1.0 * n / previousSuffix.number;
      return `${formatNumberAsCurrencyString(numberDividedBySuffixAmount)} ${previousSuffix.suffix}`;
    }
  }

  throw new Error(`Received number ${n} that was larger than the current largest supported suffix: ${NUMBER_SUFFIX_MAPPINGS[NUMBER_SUFFIX_MAPPINGS.length - 1].suffix}`);
};

// Ensures that a number string has two decimal places and is formatted correctly
const formatNumberAsCurrencyString = (n: number) => {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).substring(1)
};

export const formatNumberForDisplay = (n: number | string): string => {
  const num = parseFloat(`${n}`);
  if (isNaN(num)) {
    return '';
  }

  // Make sure that only the first two decimal places are displayed - a user may have a small fractional amount more
  // than the UI displays, but they won't know it
  const numberRoundedDown = Math.floor(num * 100.0) / 100;
  const numberWithSuffix = addSuffixToNumber(numberRoundedDown);

  return numberWithSuffix;
};
