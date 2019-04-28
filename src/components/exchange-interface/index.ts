import * as Styles from 'src/shared/styles';
import { DomainEvents } from 'src/domain';
import * as Shared from 'src/shared';
import { addRectangle } from '../rectangle';
import * as TradingDomain from 'src/domain/trading';
import { createButton } from '../main-menu-button';
import { createInputBox } from '../input-box';
import { GameEvents } from 'src/shared/events';

interface CurrencyDisplayRow {
  country: Phaser.GameObjects.Text;
  currency: Phaser.GameObjects.Text;
  trend: Phaser.GameObjects.Image | undefined;
  amountOwned: Phaser.GameObjects.Text;
  exchangeRate: Phaser.GameObjects.Text;
};

export type CurrencyDisplay = CurrencyDisplayRow[];
interface GameScene extends Phaser.Scene {
  selectedAccount: TradingDomain.Account;
  tradeAmount: number;
}

export const createExchangeInterface = (scene: GameScene, domainState: TradingDomain.DomainState) => {
  const exchangeContainer = scene.add.container(0, 0);
  scene.events.emit(GameEvents.selectedAccountChanged, { account: domainState.tradeAccounts[0] });

  createInfoInterface(scene, exchangeContainer, domainState);
  createTradeInterface(scene, exchangeContainer, domainState);
  createRootInterface(scene, exchangeContainer, domainState);

  return exchangeContainer;
};

const getInfoColumnWidth = (scene: GameScene) => {
  return Shared.getGameWidth(scene) * 0.7;
};

const getBuyColumnWidth = (scene: GameScene) => {
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

function createTrend(scene: GameScene, offsetY: number, trend: 'up' | 'down') {
  if (trend === 'up') {
    return scene.add.image(trendX, trendBaseY + offsetY, 'trend-up')
  } else if (trend === 'down') {
    return scene.add.image(trendX, trendBaseY + offsetY, 'trend-down')
  }
}

const getCurrentRootValueText = (account: TradingDomain.Account, nation: TradingDomain.Nation) => {
  return Number(account.balance / nation.currency.exchangeRate).toFixed(2);
};

const createInfoInterface = (scene: GameScene, container: Phaser.GameObjects.Container, domainState: TradingDomain.DomainState) => {
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
  const rowClickHandlers = [];
  const basicallyHidden = 0.000000000001;

  domainState.nations.forEach((nation, index) => {
    const account = domainState.tradeAccounts.find((account) => account.currency.name === nation.currency.name);
    const y = firstLineItemY + (Styles.lineItemHeight * index);

    const country = scene.add.text(countryX, y, nation.name, Styles.listItemStyle);
    const currency = scene.add.text(currencyX, y, nation.currency.name, Styles.listItemStyle);
    let trend = createTrend(scene, Styles.lineItemHeight * index, nation.currency.trend);
    const amountOwned = scene.add.text(amountOwnedX, y, account.balance.toFixed(2), Styles.listItemStyle);
    const exchangeRate = scene.add.text(exchangeRateX, y, nation.currency.exchangeRate.toFixed(2), Styles.listItemStyle);
    const rootValue = scene.add.text(rootValueX, y, getCurrentRootValueText(account, nation), Styles.listItemStyle);
    const rowClickHandler = scene.add.rectangle(Styles.offset + 1, y - 7, Styles.tradePage.currencyList.width - 2, Styles.lineItemHeight, Styles.tradePage.selectedLineItemHex, 0.5).setInteractive({ useHandCursor: true }).setOrigin(0, 0);
    if (index > 0) {
      // defaulting the first country / currency to selected here and in the trading state
      rowClickHandler.alpha = basicallyHidden;
    }
    rowClickHandlers.push(rowClickHandler);

    rowClickHandler.on('pointerup', () => {
      scene.events.emit(GameEvents.selectedAccountChanged, { account, rowClickHandler })
    });

    container.add([country, currency, trend, amountOwned, exchangeRate, rootValue]);

    domainState.events.on(DomainEvents.accountBalanceChanged, () => {
      amountOwned.setText(account.balance.toFixed(2));
      rootValue.setText(getCurrentRootValueText(account, nation));
    });

    domainState.events.on(DomainEvents.exchangeRatesChanged, () => {
      exchangeRate.setText(nation.currency.exchangeRate.toFixed(2));
      rootValue.setText(getCurrentRootValueText(account, nation));
      if (trend) {
        trend.destroy();
      }
      trend = createTrend(scene, Styles.lineItemHeight * index, nation.currency.trend);
      container.add(trend);
    });
  });

  scene.events.on(GameEvents.selectedAccountChanged, (event) => {

    rowClickHandlers.forEach((handler) => {
      handler.alpha = basicallyHidden;
    });

    event.rowClickHandler.alpha = 0.5;
  });

};

const createRootInterface = (scene: GameScene, container: Phaser.GameObjects.Container, domainState: TradingDomain.DomainState) => {
  const box = addRectangle(scene, Styles.width - Styles.offset - Styles.tradePage.usernameWidth, 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
  const rootInfoText = scene.add.text(625, 70, 'AVAILABLE ROOT', Styles.listItemStyle);
  const rootValueText = scene.add.text(rootInfoText.x + rootInfoText.width + 30, rootInfoText.y - 3, domainState.rootAccount.balance.toLocaleString(), Styles.availableRoot);

  domainState.events.on(DomainEvents.accountBalanceChanged, (account: TradingDomain.Account) => {
    if (account.name === domainState.rootAccount.name) {
      rootValueText.setText(domainState.rootAccount.balance.toFixed(2));
    }
  });
};

const createTradeInterface = (scene: GameScene, container: Phaser.GameObjects.Container, domainState: TradingDomain.DomainState) => {
  const buyContainer = scene.add.container(0, 0);
  const sellContainer = scene.add.container(0, 0);

  const buyTab = scene.add.text(Styles.tradePage.tradeInterface.x, Styles.tradePage.tradeInterface.exchangeTabY, 'BUY', Styles.selectedTab);
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

  const spendAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 210, 'BUY AMOUNT', Styles.listItemStyle);
  const buyInputBox = createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, (text) => {
    const amount = Number.parseFloat(text);
    if (!Number.isNaN(amount)) {
      scene.events.emit(GameEvents.tradeAmountChanged, amount);
    }
  }, undefined, true);
  buyContainer.add([
    spendAmountText,
    ...buyInputBox,
  ]);
  const currencyText = scene.add.text(Styles.tradePage.tradeInterface.x, 260, `CURRENCY: ${scene.selectedAccount.currency.name}`, Styles.listItemStyle);

  const sellAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 210, 'SELL AMOUNT', Styles.listItemStyle);
  const sellInputBox = createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, (text) => {
    const amount = Number.parseFloat(text);
    if (!Number.isNaN(amount)) {
      scene.events.emit(GameEvents.tradeAmountChanged, amount);
    }
  }, undefined, true);
  sellContainer.add([
    sellAmountText,
    ...sellInputBox,
  ]);

  const buy = () => {
    if (scene.selectedAccount) {
      TradingDomain.recordTrade(domainState.rootAccount, scene.selectedAccount, scene.tradeAmount, scene.selectedAccount.currency.exchangeRate, domainState)
    }
  };
  const sell = () => {
    if (scene.selectedAccount) {
      const exchangeRate = domainState.rootAccount.currency.exchangeRate / scene.selectedAccount.currency.exchangeRate;
      TradingDomain.recordTrade(scene.selectedAccount, domainState.rootAccount, scene.tradeAmount, exchangeRate, domainState);
    }
  }

  scene.events.on(GameEvents.selectedAccountChanged, (event) => {
    currencyText.text = `CURRENCY: ${event.account.currency.name}`;
  });

  buyContainer.add(createButton(scene, Styles.width - 100 - Styles.offset, 300, 'BUY', buy, 100));
  sellContainer.add(createButton(scene, Styles.width - 100 - Styles.offset, 300, 'SELL', sell, 100));

  sellContainer.setVisible(false);

  container.add(buyContainer);
  container.add(buyTab);
  container.add(sellContainer);
  container.add(sellTab);
};
