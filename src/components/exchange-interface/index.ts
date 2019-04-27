import * as Domain from '../../domain';
import * as Shared from '../../shared';

interface CurrencyDisplayRow {
  country: Phaser.GameObjects.Text;
  currency: Phaser.GameObjects.Text;
  trend: Phaser.GameObjects.Text;
  amountOwned: Phaser.GameObjects.Text;
  exchangeRate: Phaser.GameObjects.Text;
};

export type CurrencyDisplay = CurrencyDisplayRow[];

export const createExchangeInterface = (scene: Phaser.Scene, currencyDisplay: CurrencyDisplay, domainState: Domain.DomainState) => {
  createInfoInterface(scene, currencyDisplay, domainState);
  createBuyInterface(scene, domainState);
  createSellInterface(scene);
  createRootInterface(scene, domainState);
};

const getInfoColumnWidth = (scene: Phaser.Scene) => {
  return Shared.getGameWidth(scene) * 0.7;
};

const getBuyColumnWidth = (scene: Phaser.Scene) => {
  return Shared.getGameWidth(scene) * 0.075;
};

const infoHeaderStyle = { fontSize: '32px', color: '#4444FF' };
const buyHeaderStyle = { fontSize: '32px', color: '#44FF44' };
const sellHeaderStyle = { fontSize: '32px', color: '#FF4444' };

const columnHeaderStyle = { fontSize: '16px', color: '#FFFFFF' };
const currencyStyle = { fontSize: '14px', color: '#888888' };
const selectedStyle = { fontSize: '14px', color: '#FF4444' };

const countryX = 50;
const currencyX = 200;
const exchangeRateX = 350;
const amountOwnedX = 500;

const rootInfoX = 50;

const sectionHeaderY = 100;
const headerColumnY = 200;

const createInfoInterface = (scene: Phaser.Scene, currencyDisplay: CurrencyDisplay, domainState: Domain.DomainState) => {
  const x = countryX;
  scene.add.text(x, sectionHeaderY, 'INFO', infoHeaderStyle).setOrigin(0, 0);

  scene.add.text(countryX, headerColumnY, 'COUNTRY', columnHeaderStyle);
  scene.add.text(currencyX, headerColumnY, 'CURRENCY', columnHeaderStyle);
  scene.add.text(amountOwnedX, headerColumnY, 'AMT. OWNED', columnHeaderStyle);
  scene.add.text(exchangeRateX, headerColumnY, 'EXC. RATE', columnHeaderStyle);

  domainState.nations.forEach((nation, index) => {
    const account = domainState.tradeAccounts.find((account) => account.currency.name === nation.currency.name);

    const country = scene.add.text(countryX, 250 + (50 * index), nation.name, currencyStyle);
    const currency = scene.add.text(currencyX, 250 + (50 * index), nation.currency.name, currencyStyle);
    const trend = scene.add.text(currencyX + currency.width + 5, 250 + (50 * index), nation.currency.trend || '', currencyStyle);
    const amountOwned = scene.add.text(amountOwnedX, 250 + (50 * index), account.balance.toFixed(2), currencyStyle);
    const exchangeRate = scene.add.text(exchangeRateX, 250 + (50 * index), nation.currency.exchangeRate.toFixed(2), currencyStyle);


    domainState.events.on(Domain.DomainEvents.accountBalanceChanged, () => {
      amountOwned.setText(account.balance.toFixed(2));
    });

    domainState.events.on(Domain.DomainEvents.exchangeRatesChanged, () => {
      console.log(`Updating text for ${nation.name}`);
      exchangeRate.setText(nation.currency.exchangeRate.toFixed(2));
      trend.setText(nation.currency.trend || '');
    });

    const buyButton = scene.add.text(getInfoColumnWidth(scene) + 20, 250 + (50 * index), '+', currencyStyle).setInteractive({ cursor: 'pointer' });
    const sellButton = scene.add.text(getInfoColumnWidth(scene) + getBuyColumnWidth(scene), buyButton.y, '-', currencyStyle).setInteractive({ cursor: 'pointer' });

    buyButton.on('pointerdown', () => {
      Domain.recordTrade(domainState.rootAccount, account, domainState.tradeAmount, account.currency.exchangeRate, domainState);
    });

    sellButton.on('pointerdown', () => {
      const exchangeRate = domainState.rootAccount.currency.exchangeRate / account.currency.exchangeRate;
      Domain.recordTrade(account, domainState.rootAccount, domainState.tradeAmount, exchangeRate, domainState);
    });

    currencyDisplay.push({ country, currency, trend, amountOwned, exchangeRate });
  });

  const y = (domainState.nations.length * 50) + 300;

  let button = scene.add.text(x, y, `1`, currencyStyle).setInteractive({ cursor: 'pointer' });
  button.on('pointerdown', () => {
    Domain.setTradeAmount(domainState, 1);
  });

  [10, 100, 1000, 10000, 100000, 1000000].forEach((amount, i) => {
    button = scene.add.text(button.x + button.width + 10, y, amount.toLocaleString(), currencyStyle).setInteractive({ cursor: 'pointer' });
    button.on('pointerdown', () => {
      Domain.setTradeAmount(domainState, amount);
    });
  });

};

const createBuyInterface = (scene: Phaser.Scene, domainState: Domain.DomainState) => {
  const x = getInfoColumnWidth(scene);
  scene.add.text(x, sectionHeaderY, 'BUY', buyHeaderStyle).setOrigin(0, 0);
};

const createSellInterface = (scene: Phaser.Scene) => {
  const x = getInfoColumnWidth(scene) + getBuyColumnWidth(scene);
  scene.add.text(x, sectionHeaderY, 'SELL', sellHeaderStyle).setOrigin(0, 0);
};

const createRootInterface = (scene: Phaser.Scene, domainState: Domain.DomainState) => {
  const rootInfoText = scene.add.text(rootInfoX, scene.game.scale.height - 150, 'Root:', columnHeaderStyle);
  const rootValueText = scene.add.text(rootInfoText.x + rootInfoText.width + 20, scene.game.scale.height - 150, domainState.rootAccount.balance.toFixed(2), columnHeaderStyle);

  domainState.events.on(Domain.DomainEvents.accountBalanceChanged, (account: Domain.Account) => {
    if (account.name === domainState.rootAccount.name) {
      console.log('updating root', account.name, account.balance)
      rootValueText.setText(domainState.rootAccount.balance.toFixed(2));
    }
  });
};
