import * as Styles from 'src/shared/styles';
import { DomainEvents } from 'src/domain';
import * as Shared from 'src/shared';
import { addRectangle } from '../rectangle';
import * as TradingDomain from 'src/domain/trading';

interface CurrencyDisplayRow {
  country: Phaser.GameObjects.Text;
  currency: Phaser.GameObjects.Text;
  trend: Phaser.GameObjects.Image | undefined;
  amountOwned: Phaser.GameObjects.Text;
  exchangeRate: Phaser.GameObjects.Text;
};

export type CurrencyDisplay = CurrencyDisplayRow[];

export const createExchangeInterface = (scene: Phaser.Scene, domainState: TradingDomain.DomainState) => {
  const exchangeContainer = scene.add.container(0, 0);

  createInfoInterface(scene, exchangeContainer, domainState);
  createRootInterface(scene, exchangeContainer, domainState);

  return exchangeContainer;
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

const columnHeaderStyle = { fontSize: '16px', color: Styles.tradePage.currencyList.headerColor };
const currencyStyle = { fontSize: '14px', color: Styles.tradePage.currencyList.itemColor };
const selectedStyle = { fontSize: '14px', color: '#FF4444' };

const countryX = 20;
const currencyX = 200;
const exchangeRateX = 320;
const trendX = 370;
const trendBaseY = 207;
const amountOwnedX = 450;
const rootValueX = 610;

const rootInfoX = 50;

const sectionHeaderY = 100;
const headerColumnY = 160;
const firstLineItemY = 200;
const lineItemHeight = 30;

function createTrend(scene: Phaser.Scene, offsetY: number, trend: 'up' | 'down') {
  if (trend === 'up') {
    return scene.add.image(trendX, trendBaseY + offsetY, 'trend-up')
  } else if (trend === 'down') {
    return scene.add.image(trendX, trendBaseY + offsetY, 'trend-down')
  }
}

const getCurrentRootValueText = (account: TradingDomain.Account, nation: TradingDomain.Nation) => {
  return Number(account.balance / nation.currency.exchangeRate).toFixed(2);
};

const createInfoInterface = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: TradingDomain.DomainState) => {
  const x = countryX;
  const currencyDisplay: CurrencyDisplay = [];

  container.add([
    scene.add.text(countryX, headerColumnY, 'COUNTRY', columnHeaderStyle),
    scene.add.text(currencyX, headerColumnY, 'CURRENCY', columnHeaderStyle),
    scene.add.text(amountOwnedX, headerColumnY, 'AMT. OWNED', columnHeaderStyle),
    scene.add.text(exchangeRateX, headerColumnY, 'EXC. RATE', columnHeaderStyle),
  ]);

  domainState.nations.forEach((nation, index) => {
    const account = domainState.tradeAccounts.find((account) => account.currency.name === nation.currency.name);

    const country = scene.add.text(countryX, firstLineItemY + (lineItemHeight * index), nation.name, currencyStyle);
    const currency = scene.add.text(currencyX, firstLineItemY + (lineItemHeight * index), nation.currency.name, currencyStyle);
    let trend: Phaser.GameObjects.Image | undefined = createTrend(scene, lineItemHeight * index, nation.currency.trend);
    const amountOwned = scene.add.text(amountOwnedX, firstLineItemY + (lineItemHeight * index), account.balance.toFixed(2), currencyStyle);
    const exchangeRate = scene.add.text(exchangeRateX, firstLineItemY + (lineItemHeight * index), nation.currency.exchangeRate.toFixed(2), currencyStyle);
    const rootValue = scene.add.text(rootValueX, firstLineItemY + (lineItemHeight * index), getCurrentRootValueText(account, nation), currencyStyle);

    container.add([country, currency, amountOwned, exchangeRate]);

    domainState.events.on(DomainEvents.accountBalanceChanged, () => {
      amountOwned.setText(account.balance.toFixed(2));
      rootValue.setText(getCurrentRootValueText(account, nation));
    });

    domainState.events.on(DomainEvents.exchangeRatesChanged, () => {
      console.log(`Updating text for ${nation.name}`);
      exchangeRate.setText(nation.currency.exchangeRate.toFixed(2));
      rootValue.setText(getCurrentRootValueText(account, nation));
      if (trend) {
        trend.destroy();
      }
      trend = createTrend(scene, lineItemHeight * index, nation.currency.trend);
    });

    const buyButton = scene.add.text(getInfoColumnWidth(scene) + 20, firstLineItemY + (lineItemHeight * index), '+', currencyStyle).setInteractive({ cursor: 'pointer' });
    const sellButton = scene.add.text(getInfoColumnWidth(scene) + getBuyColumnWidth(scene), buyButton.y, '-', currencyStyle).setInteractive({ cursor: 'pointer' });

    container.add([buyButton, sellButton]);

    buyButton.on('pointerdown', () => {
      TradingDomain.recordTrade(domainState.rootAccount, account, domainState.tradeAmount, account.currency.exchangeRate, domainState);
    });

    sellButton.on('pointerdown', () => {
      const exchangeRate = domainState.rootAccount.currency.exchangeRate / account.currency.exchangeRate;
      TradingDomain.recordTrade(account, domainState.rootAccount, domainState.tradeAmount, exchangeRate, domainState);
    });

    currencyDisplay.push({ country, currency, trend, amountOwned, exchangeRate });
  });

  const y = (domainState.nations.length * lineItemHeight) + 300;

  let button = scene.add.text(x, y, `1`, currencyStyle).setInteractive({ cursor: 'pointer' });
  button.on('pointerdown', () => {
    TradingDomain.setTradeAmount(domainState, 1);
  });
  container.add([button]);

  [10, 100, 1000, 10000, 100000, 1000000].forEach((amount, i) => {
    button = scene.add.text(button.x + button.width + 10, y, amount.toLocaleString(), currencyStyle).setInteractive({ cursor: 'pointer' });
    button.on('pointerdown', () => {
      TradingDomain.setTradeAmount(domainState, amount);
    });
    container.add([button]);
  });

};

const createRootInterface = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: TradingDomain.DomainState) => {
  const box = addRectangle(scene, Styles.width - Styles.offset - Styles.tradePage.usernameWidth, 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
  const rootInfoText = scene.add.text(625, 70, 'AVAILABLE ROOT', Styles.textStyle);
  const rootValueText = scene.add.text(rootInfoText.x + rootInfoText.width + 30, rootInfoText.y - 3, domainState.rootAccount.balance.toLocaleString(), Styles.availableRoot);
  // // const rootInfoText = scene.add.text(rootInfoX, scene.game.scale.height - 150, 'Root:', columnHeaderStyle);
  // const rootInfoText = scene.add.text(rootInfoX, scene.game.scale.height - 150, 'Root:', columnHeaderStyle);
  // const rootValueText = scene.add.text(rootInfoText.x + rootInfoText.width + 20, scene.game.scale.height - 150, domainState.rootAccount.balance.toFixed(2), columnHeaderStyle);

  domainState.events.on(DomainEvents.accountBalanceChanged, (account: TradingDomain.Account) => {
    if (account.name === domainState.rootAccount.name) {
      console.log('updating root', account.name, account.balance)
      rootValueText.setText(domainState.rootAccount.balance.toFixed(2));
    }
  });
};
