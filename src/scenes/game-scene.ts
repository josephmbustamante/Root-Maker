import * as Domain from 'src/domain';
import * as _ from 'lodash';
import * as ExchangeInterface from '../components/exchange-interface';
import * as CultInterface from '../components/cult-interface';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  domainState: Domain.DomainState;

  domainTickTime = 5000; // milliseconds
  timeSinceLastTick = 0;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.domainState = Domain.initDomainState({
      trading: {
        rootCurrencyName: 'root',
        rootCurrencyStartingAmount: 100,
        nations: [
          { currency: 'Duller', nation: 'Andromeda' },
          { currency: 'When', nation: 'Corennia' },
          { currency: 'Prawn', nation: 'Great Burton' },
          { currency: 'Pesto', nation: 'Median' },
        ],
      },
    });

    this.add.text(50, 50, 'EXCHANGE').setInteractive({ useHandCursor: true }).on('pointerup', () => {
      cultContainer.setVisible(false);
      exchangeContainer.setVisible(true);
    });

    this.add.text(200, 50, 'CULT').setInteractive({ useHandCursor: true }).on('pointerup', () => {
      exchangeContainer.setVisible(false);
      cultContainer.setVisible(true);
    });

    const exchangeContainer = ExchangeInterface.createExchangeInterface(this, this.domainState.trading);
    const cultContainer = CultInterface.createCultInterface(this).setVisible(false);

    this.createNewsTicker(50, this.game.scale.height - 50);
  }

  public update(time, delta) {
    this.timeSinceLastTick += delta;

    if (this.timeSinceLastTick >= this.domainTickTime) {
      console.log('tick!');
      this.timeSinceLastTick = 0;

      Domain.handleTick(this.domainState);
    }

    this.updateStories();
  }

  private storyQueue: string[] = [];
  private storyDisplays: Array<{ text: string, textObject: Phaser.GameObjects.Text, posX: number }> = [];
  private tickerX: number;
  private tickerY: number;

  private createNewsTicker(x: number, y: number) {
    this.tickerX = x;
    this.tickerY = y;
    this.add.text(x, y, 'BREAKING NEWS');
    this.domainState.trading.events.on(Domain.DomainEvents.nationEventOccurred, (nation, headline) => {
      this.addStory(`${nation.name} ${headline}`);
    });
    this.domainState.trading.events.on(Domain.DomainEvents.nationEventEnded, (nation, headline) => {
      this.addStory(`${nation.name} ${headline}`);
    });
    this.updateStories();
  }

  private readyToDisplayNextStory = true;

  private updateStories() {
    const y = this.tickerY + 20;
    const buildStory = this.readyToDisplayNextStory && (this.storyQueue.length > 0);
    if (buildStory) {
      const text = this.storyQueue.shift();
      this.storyDisplays.push({ textObject: this.add.text(window.innerWidth, y, text ), text, posX: window.innerWidth });
      this.readyToDisplayNextStory = false;
    }
    this.storyDisplays.forEach((story) => {
      story.textObject.destroy();
      story.posX -= 2;
      story.textObject = this.add.text(story.posX, y, story.text);
    });
    this.storyDisplays = this.storyDisplays.filter((story) => {
      const offScreen = story.textObject.displayWidth + story.posX < 0;
      if (offScreen) {
        story.textObject.destroy();
        return false;
      }
      return true;
    });
    const padding = 100;
    // console.log('piece1', );
    // console.log('piece2', )
    if (this.storyDisplays.length === 0 || _.last(this.storyDisplays).textObject.displayWidth + padding <  window.innerWidth - _.last(this.storyDisplays).posX) {
      this.readyToDisplayNextStory = true;
    }
  }

  private addStory(headline: string) {
    this.storyQueue.push(headline);
  }
}
