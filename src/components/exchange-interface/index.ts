import * as Styles from 'src/shared/styles';
import { DomainEvents } from 'src/domain';
import * as Shared from 'src/shared';
import { addRectangle } from '../rectangle';
import * as TradingDomain from 'src/domain/trading';
import { createButton } from '../main-menu-button';

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
  createTradeInterface(scene, exchangeContainer, domainState);
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
  container.add(addRectangle(scene,
    Styles.tradePage.currencyList.x,
    Styles.tradePage.currencyList.y,
    Styles.tradePage.currencyList.width,
    Styles.tradePage.currencyList.height,
    Styles.foregroundColorHex,
  ));

  const x = countryX;
  const currencyDisplay: CurrencyDisplay = [];

  container.add([
    scene.add.text(countryX, headerColumnY, 'COUNTRY', columnHeaderStyle),
    scene.add.text(currencyX, headerColumnY, 'CURRENCY', columnHeaderStyle),
    scene.add.text(amountOwnedX, headerColumnY, 'AMT. OWNED', columnHeaderStyle),
    scene.add.text(exchangeRateX, headerColumnY, 'EXC. RATE', columnHeaderStyle),
    scene.add.text(rootValueX, headerColumnY, 'ROOT VALUE', columnHeaderStyle),
  ]);

  domainState.nations.forEach((nation, index) => {
    const account = domainState.tradeAccounts.find((account) => account.currency.name === nation.currency.name);
    const y = firstLineItemY + (Styles.lineItemHeight * index);

    const country = scene.add.text(countryX, y, nation.name, Styles.listItemStyle);
    const currency = scene.add.text(currencyX, y, nation.currency.name, Styles.listItemStyle);
    let trend = createTrend(scene, Styles.lineItemHeight * index, nation.currency.trend);
    const amountOwned = scene.add.text(amountOwnedX, y, account.balance.toFixed(2), Styles.listItemStyle);
    const exchangeRate = scene.add.text(exchangeRateX, y, nation.currency.exchangeRate.toFixed(2), Styles.listItemStyle);
    const rootValue = scene.add.text(rootValueX, y, getCurrentRootValueText(account, nation), Styles.listItemStyle);
    const rowClickHandler = scene.add.rectangle(Styles.offset, y, Styles.tradePage.currencyList.width, Styles.lineItemHeight, Styles.tradePage.selectedLineItemHex, 0).setInteractive({ useHandCursor: true }).setOrigin(0, 0);

    rowClickHandler.on('pointerdown', () => {
      console.log('pointerdown', account)
      rowClickHandler.setAlpha(0.5);
      domainState.selectedAccount = account;
    });
    rowClickHandler.on('pointerup', () => {
      console.log('pointerdown', account)
      rowClickHandler.setAlpha(0);
      domainState.selectedAccount = null;
    });

    container.add([country, currency, trend, amountOwned, exchangeRate, rootValue]);

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
      trend = createTrend(scene, Styles.lineItemHeight * index, nation.currency.trend);
      container.add(trend);
    });

    //   const buyButton = scene.add.text(getInfoColumnWidth(scene) + 20, firstLineItemY + (Styles.lineItemHeight * index), '+', Styles.listItemStyle).setInteractive({ cursor: 'pointer' });
    //   const sellButton = scene.add.text(getInfoColumnWidth(scene) + getBuyColumnWidth(scene), buyButton.y, '-', Styles.listItemStyle).setInteractive({ cursor: 'pointer' });

    //   container.add([buyButton, sellButton]);

    //   buyButton.on('pointerdown', () => {
    //     TradingDomain.recordTrade(domainState.rootAccount, account, domainState.tradeAmount, account.currency.exchangeRate, domainState);
    //   });

    //   sellButton.on('pointerdown', () => {
    //     const exchangeRate = domainState.rootAccount.currency.exchangeRate / account.currency.exchangeRate;
    //     TradingDomain.recordTrade(account, domainState.rootAccount, domainState.tradeAmount, exchangeRate, domainState);
    //   });

    //   currencyDisplay.push({ country, currency, trend, amountOwned, exchangeRate });
    // });

    // const y = (domainState.nations.length * Styles.lineItemHeight) + 300;

    // let button = scene.add.text(x, y, `1`, Styles.listItemStyle).setInteractive({ cursor: 'pointer' });
    // button.on('pointerdown', () => {
    //   TradingDomain.setTradeAmount(domainState, 1);
    // });
    // container.add([button]);

    // [10, 100, 1000, 10000, 100000, 1000000].forEach((amount, i) => {
    //   button = scene.add.text(button.x + button.width + 10, y, amount.toLocaleString(), Styles.listItemStyle).setInteractive({ cursor: 'pointer' });
    //   button.on('pointerdown', () => {
    //     TradingDomain.setTradeAmount(domainState, amount);
    //   });
    //   container.add([button]);
  });

};

const createRootInterface = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: TradingDomain.DomainState) => {
  const box = addRectangle(scene, Styles.width - Styles.offset - Styles.tradePage.usernameWidth, 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
  const rootInfoText = scene.add.text(625, 70, 'AVAILABLE ROOT', Styles.listItemStyle);
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

const createTradeInterface = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: TradingDomain.DomainState) => {
  const buyContainer = scene.add.container(0, 0);
  const sellContainer = scene.add.container(0, 0);

  const buyTab = scene.add.text(Styles.tradePage.tradeInterface.exchangeTabX, Styles.tradePage.tradeInterface.exchangeTabY, 'BUY', Styles.selectedTab);
  buyTab.setInteractive({ useHandCursor: true });
  buyTab.on('pointerup', () => {
    sellTab.setStyle(Styles.unselectedTab);
    buyTab.setStyle(Styles.selectedTab);
    sellContainer.setVisible(false);
    buyContainer.setVisible(true);
  });

  const sellTab = scene.add.text(buyTab.x + buyTab.width + Styles.offset * 2, Styles.tradePage.tradeInterface.exchangeTabY, 'SELL', Styles.unselectedTab);
  sellTab.setInteractive({ useHandCursor: true }).on('pointerup', () => {
    buyTab.setStyle(Styles.unselectedTab);
    sellTab.setStyle(Styles.selectedTab);
    buyContainer.setVisible(false);
    sellContainer.setVisible(true);
  });

  const buy = () => {
    if (domainState.selectedAccount) {
      TradingDomain.recordTrade(domainState.rootAccount, domainState.selectedAccount, domainState.tradeAmount, domainState.selectedAccount.currency.exchangeRate, domainState)
    }
  };
  const sell = () => {
    if (domainState.selectedAccount) {
      const exchangeRate = domainState.rootAccount.currency.exchangeRate / domainState.selectedAccount.currency.exchangeRate;
      TradingDomain.recordTrade(domainState.selectedAccount, domainState.rootAccount, domainState.tradeAmount, exchangeRate, domainState);
    }
  }

  buyContainer.add(createButton(scene, Styles.width - 100 - Styles.offset, 300, 'BUY', buy, 100));
  sellContainer.add(createButton(scene, Styles.width - 100 - Styles.offset, 300, 'SELL', sell, 100));

  sellContainer.setVisible(false);

  container.add(buyContainer);
  container.add(buyTab);
  container.add(sellContainer);
  container.add(sellTab);
};
