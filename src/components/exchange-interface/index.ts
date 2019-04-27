import * as Domain from '../../domain';

export type CurrencyDisplayRow = Array<{ currencyName: string, valueText: Phaser.GameObjects.Text }>;

export const createExchangeInterface = (scene: Phaser.Scene, currencyDisplayRow: CurrencyDisplayRow, domainState: Domain.DomainState) => {
  createBuyInterface(scene, currencyDisplayRow, domainState);
  createSellInterface(scene);
  createInfoInterface(scene, domainState);
};

const buyHeaderStyle = { fontSize: '32px', color: '#44FF44' };
const columnHeaderStyle = { fontSize: '24px', color: '#FFFFFF' };
const currencyStyle = { fontSize: '20px', color: '#888888' };

const nameColumnX = 100;
const currentValueColumnX = 300;
const buyColumnX = 450;

const headerColumnY = 200;

const createBuyInterface = (scene: Phaser.Scene, currencyDisplayRow: CurrencyDisplayRow, domainState: Domain.DomainState) => {
  scene.add.text(150, 100, 'BUY', buyHeaderStyle);

  scene.add.text(nameColumnX, headerColumnY, 'NAME', columnHeaderStyle);
  scene.add.text(currentValueColumnX, headerColumnY, 'VALUE', columnHeaderStyle);

  domainState.tradeCurrencies.forEach((currency, index) => {
    scene.add.text(nameColumnX, 250 + (50 * index), currency.name, currencyStyle);

    const valueText = scene.add.text(currentValueColumnX, 250 + (50 * index), currency.exchangeRate.toFixed(2), currencyStyle);
    domainState.events.on(Domain.DomainEvents.exchangeRatesChanged, () => {
      console.log(`Updating text for ${currency.name} --- text element: ${valueText}`);
      valueText.setText(currency.exchangeRate.toFixed(2));
    });

    scene.add.text(buyColumnX, 250 + (50 * index), '+', currencyStyle);

    currencyDisplayRow.push({ currencyName: currency.name, valueText });
  });
};

const createSellInterface = (scene: Phaser.Scene) => {
  const sellHeaderStyle = { fontSize: '32px', color: '#FF4444' };

  scene.add.text(650, 100, 'SELL', sellHeaderStyle);
};

const createInfoInterface = (scene: Phaser.Scene, domainState: Domain.DomainState) => {
  const rootInfoText = scene.add.text(nameColumnX, scene.game.scale.height - 150, 'Root:', columnHeaderStyle);
  const rootValueText = scene.add.text(rootInfoText.x + rootInfoText.width + 20, scene.game.scale.height - 150, domainState.rootAccount.balance.toFixed(2), columnHeaderStyle);

  domainState.events.on(Domain.DomainEvents.accountBalanceChanged, (account: Domain.Account) => {
    if (account.name === domainState.rootAccount.name) {
      console.log('updating root', account.name, account.balance)
      rootValueText.setText(domainState.rootAccount.balance.toFixed(2));
    }
  });
};
