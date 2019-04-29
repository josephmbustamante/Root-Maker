import * as Styles from 'src/shared/styles';
import { DomainEvents } from 'src/domain';
import * as Shared from 'src/shared';
import { addRectangle } from '../rectangle';
import * as TradingDomain from 'src/domain/trading';
import { createButton } from '../button';
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
  buyAmount: number;
  sellAmount: number;
}

export const createExchangeInterface = (scene: GameScene, domainState: TradingDomain.TradingDomainState) => {
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

const columnHeaderStyle = { fontSize: '16px', color: Styles.tradePage.currencyList.headerColor };

const countryX = 20;
const currencyX = 200;
const exchangeRateX = 320;
const trendX = 370;
const trendBaseY = 207;
const amountOwnedX = 450;
const rootValueX = 610;

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
  return Shared.formatNumberForDisplay(account.balance / nation.currency.exchangeRate);
};

const createInfoInterface = (scene: GameScene, container: Phaser.GameObjects.Container, domainState: TradingDomain.TradingDomainState) => {
  container.add(addRectangle(scene,
    Styles.tradePage.currencyList.x,
    Styles.tradePage.currencyList.y,
    Styles.tradePage.currencyList.width,
    Styles.tradePage.currencyList.height,
    Styles.foregroundColorHex,
  ));

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
    const amountOwned = scene.add.text(amountOwnedX, y, Shared.formatNumberForDisplay(account.balance), Styles.listItemStyle);
    const exchangeRate = scene.add.text(exchangeRateX, y, Shared.formatNumberForDisplay(nation.currency.exchangeRate), Styles.listItemStyle);
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

    container.add([country, currency, trend, amountOwned, exchangeRate, rootValue, rowClickHandler]);

    domainState.events.on(DomainEvents.accountBalanceChanged, () => {
      amountOwned.setText(Shared.formatNumberForDisplay(account.balance));
      rootValue.setText(getCurrentRootValueText(account, nation));
    });

    domainState.events.on(DomainEvents.exchangeRatesChanged, () => {
      exchangeRate.setText(Shared.formatNumberForDisplay(nation.currency.exchangeRate));
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

const createRootInterface = (scene: GameScene, container: Phaser.GameObjects.Container, domainState: TradingDomain.TradingDomainState) => {
  const box = addRectangle(scene, Styles.width - Styles.offset - Styles.tradePage.usernameWidth, 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
  const rootInfoText = scene.add.text(625, 70, 'AVAILABLE ROOT', Styles.listItemStyle);
  const rootValueText = scene.add.text(rootInfoText.x + rootInfoText.width + 30, rootInfoText.y - 3, Shared.formatNumberForDisplay(domainState.rootAccount.balance), Styles.availableRoot);

  domainState.events.on(DomainEvents.accountBalanceChanged, (account: TradingDomain.Account) => {
    if (account.name === domainState.rootAccount.name) {
      rootValueText.setText(Shared.formatNumberForDisplay(domainState.rootAccount.balance));
    }
  });
};

function getBuyAmountText (scene: GameScene) {
  const currencyAmount = Shared.formatNumberForDisplay(scene.buyAmount * scene.selectedAccount.currency.exchangeRate);
  const currencyType = scene.selectedAccount.currency.name;
  const rootAmount = Shared.formatNumberForDisplay(scene.buyAmount);
  return `BUY ${currencyAmount} ${currencyType} FOR ${rootAmount} ROOT`
};

function getSellAmountText (scene: GameScene) {
  const currencyAmount = Shared.formatNumberForDisplay(scene.sellAmount);
  const currencyType = scene.selectedAccount.currency.name;
  const rootAmount = Shared.formatNumberForDisplay(scene.sellAmount / scene.selectedAccount.currency.exchangeRate);
  return `SELL ${currencyAmount} ${currencyType} FOR ${rootAmount} ROOT`
};

const createTradeInterface = (scene: GameScene, container: Phaser.GameObjects.Container, domainState: TradingDomain.TradingDomainState) => {
  const buyContainer = scene.add.container(0, 0);
  const sellContainer = scene.add.container(0, 0);
  const influenceContainer = scene.add.container(0, 0);

  const buyTab = scene.add.text(Styles.tradePage.tradeInterface.x, Styles.tradePage.tradeInterface.exchangeTabY, 'BUY', Styles.selectedTab);
  buyTab.setInteractive({ useHandCursor: true });
  buyTab.on('pointerup', () => {
    sellTab.setStyle(Styles.unselectedTab);
    influenceTab.setStyle(Styles.unselectedTab);
    buyTab.setStyle(Styles.selectedTab);
    influenceContainer.setVisible(false);
    sellContainer.setVisible(false);
    buyContainer.setVisible(true);
  });

  const sellTab = scene.add.text(buyTab.x + buyTab.width + Styles.offset * 2, Styles.tradePage.tradeInterface.exchangeTabY, 'SELL', Styles.unselectedTab);
  sellTab.setInteractive({ useHandCursor: true }).on('pointerup', () => {
    buyTab.setStyle(Styles.unselectedTab);
    influenceTab.setStyle(Styles.unselectedTab);
    sellTab.setStyle(Styles.selectedTab);
    influenceContainer.setVisible(false);
    buyContainer.setVisible(false);
    sellContainer.setVisible(true);
  });

  const influenceTab = scene.add.text(sellTab.x + sellTab.width + Styles.offset * 2, Styles.tradePage.tradeInterface.exchangeTabY, 'INFLUENCE', Styles.unselectedTab);
  influenceTab.setVisible(false);
  influenceTab.setInteractive({ useHandCursor: true }).on('pointerup', () => {
    influenceTab.setStyle(Styles.selectedTab);
    buyTab.setStyle(Styles.unselectedTab);
    sellTab.setStyle(Styles.unselectedTab);
    influenceContainer.setVisible(true);
    buyContainer.setVisible(false);
    sellContainer.setVisible(false);
  });
  domainState.events.on(DomainEvents.influenceCapabilityUnlocked, () => influenceTab.setVisible(true));

  const spendAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 210, 'BUY AMOUNT', Styles.listItemStyle);
  const buyInputBox = createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, (text) => {
    const amount = Number.parseFloat(text);
    if (!Number.isNaN(amount)) {
      scene.events.emit(GameEvents.buyAmountChanged, amount);
    }
  }, undefined, true);
  const buyAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 260, getBuyAmountText(scene), Styles.tradeAmountText);

  buyContainer.add([
    spendAmountText,
    ...buyInputBox,
    buyAmountText,
  ]);

  const sellAmountLabel = scene.add.text(Styles.tradePage.tradeInterface.x, 210, 'SELL AMOUNT', Styles.listItemStyle);
  const sellInputBox = createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, (text) => {
    const amount = Number.parseFloat(text);
    if (!Number.isNaN(amount)) {
      scene.events.emit(GameEvents.sellAmountChanged, amount);
    }
  }, undefined, true);

  const sellAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 260, getSellAmountText(scene), Styles.tradeAmountText);

  sellContainer.add([
    sellAmountLabel,
    ...sellInputBox,
    sellAmountText,
  ]);

  const buy = () => {
    if (scene.selectedAccount) {
      TradingDomain.recordTrade(domainState.rootAccount, scene.selectedAccount, scene.buyAmount, scene.selectedAccount.currency.exchangeRate, domainState)
    }
  };
  const sell = () => {
    if (scene.selectedAccount) {
      const exchangeRate = domainState.rootAccount.currency.exchangeRate / scene.selectedAccount.currency.exchangeRate;
      TradingDomain.recordTrade(scene.selectedAccount, domainState.rootAccount, scene.sellAmount, exchangeRate, domainState);
    }
  }

  scene.events.on(GameEvents.selectedAccountChanged, (event) => {
    buyAmountText.text = getBuyAmountText(scene);
    sellAmountText.text = getSellAmountText(scene);
  });

  scene.events.on(GameEvents.buyAmountChanged, (event) => {
    buyAmountText.text = getBuyAmountText(scene);
  });

  scene.events.on(GameEvents.sellAmountChanged, (event) => {
    sellAmountText.text = getSellAmountText(scene);
  });

  domainState.events.on(DomainEvents.exchangeRatesChanged, (event) => {
    buyAmountText.text = getBuyAmountText(scene);
    sellAmountText.text = getSellAmountText(scene);
  });

  buyContainer.add(createButton(scene, Styles.width - 100 - Styles.offset, 300, 'BUY', buy, 100));
  sellContainer.add(createButton(scene, Styles.width - 100 - Styles.offset, 300, 'SELL', sell, 100));

  let influenceY = 210;
  const influenceButtonWidth = 100;

  influenceContainer.add(scene.add.text(Styles.tradePage.tradeInterface.x, influenceY, TradingDomain.startRumorAction.name, Styles.listItemStyle));
  influenceContainer.add(createButton(scene, Styles.width - influenceButtonWidth - Styles.offset, influenceY - 10, Shared.formatNumberForDisplay(TradingDomain.startRumorAction.cost), () => TradingDomain.startRumor(domainState, scene.selectedAccount), influenceButtonWidth));
  influenceY += 50;

  influenceContainer.add(scene.add.text(Styles.tradePage.tradeInterface.x, influenceY, TradingDomain.bribePoliticianAction.name, Styles.listItemStyle));
  influenceContainer.add(createButton(scene, Styles.width - influenceButtonWidth - Styles.offset, influenceY - 10, Shared.formatNumberForDisplay(TradingDomain.bribePoliticianAction.cost), () => TradingDomain.bribePolitician(domainState, scene.selectedAccount), influenceButtonWidth));
  influenceY += 50;


  influenceContainer.add(scene.add.text(Styles.tradePage.tradeInterface.x, influenceY, TradingDomain.rigElectionAction.name, Styles.listItemStyle));
  influenceContainer.add(createButton(scene, Styles.width - influenceButtonWidth - Styles.offset, influenceY - 10, Shared.formatNumberForDisplay(TradingDomain.rigElectionAction.cost), () => TradingDomain.rigElection(domainState, scene.selectedAccount), influenceButtonWidth));
  influenceY += 50;

  // const sellInputBox = createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, (text) => {
  //   const amount = Number.parseFloat(text);
  //   if (!Number.isNaN(amount)) {
  //     scene.events.emit(GameEvents.sellAmountChanged, amount);
  //   }
  // }, undefined, true);

  sellContainer.setVisible(false);
  influenceContainer.setVisible(false);

  container.add(buyContainer);
  container.add(buyTab);
  container.add(sellContainer);
  container.add(sellTab);
  container.add(influenceContainer);
  container.add(influenceTab);
};
