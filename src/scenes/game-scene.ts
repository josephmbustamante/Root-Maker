import * as Domain from 'src/domain';
import * as _ from 'lodash';
import * as ExchangeInterface from '../components/exchange-interface';
import * as Styles from 'src/shared/styles';
import { addHorizontalScreenLine } from 'src/components/line';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  domainState: Domain.DomainState;
  currencyDisplay: ExchangeInterface.CurrencyDisplay;

  domainTickTime = 5000; // milliseconds
  timeSinceLastTick = 0;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.domainState = Domain.initState({
      rootCurrencyName: 'root',
      rootCurrencyStartingAmount: 100,
      nations: [
        { currency: 'Duller', nation: 'Andromeda' },
        { currency: 'When', nation: 'Corennia' },
        { currency: 'Prawn', nation: 'Great Burton' },
        { currency: 'Pesto', nation: 'Median' },
      ],
    });

    this.currencyDisplay = [];


    this.createNewsTicker(50, this.game.scale.height - 50);

    const logo = this.add.image(Styles.offset * 2, Styles.offset, 'logo').setOrigin(0, 0);
    // logo.setScale(0.3, 0.3); // necessary for the svg style
    addHorizontalScreenLine(this, 50);
    const usernameText = this.add.text(Styles.offset, 70, 'USERNAME', Styles.textStyle);
    this.add.rectangle(usernameText.x + usernameText.width + (Styles.offset * 2), 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex).setOrigin(0,0);

    const box = this.add.rectangle(Styles.width - Styles.offset - Styles.tradePage.usernameWidth, 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex).setOrigin(0,0);
    const availableRootText = this.add.text(625, 70, 'AVAILABLE ROOT', Styles.textStyle);

    addHorizontalScreenLine(this, 100);
    addHorizontalScreenLine(this, 700);

    this.add.rectangle(
      Styles.tradePage.currencyList.x,
      Styles.tradePage.currencyList.y,
      Styles.tradePage.currencyList.width,
      Styles.tradePage.currencyList.height,
      Styles.foregroundColorHex,
    ).setOrigin(0, 0);

    ExchangeInterface.createExchangeInterface(this, this.currencyDisplay, this.domainState);
  }

  public update(time, delta) {
    this.timeSinceLastTick += delta;

    if (this.timeSinceLastTick >= this.domainTickTime) {
      console.log('tick!');
      this.timeSinceLastTick = 0;
      Domain.runCurrencyFluctuations(this.domainState);


      Domain.runRandomNationEvents(this.domainState);
      Domain.checkForExpiringNationEvents(this.domainState);
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
    this.domainState.events.on(Domain.DomainEvents.nationEventOccurred, (nation, headline) => {
      this.addStory(`${nation.name} ${headline}`);
    });
    this.domainState.events.on(Domain.DomainEvents.nationEventEnded, (nation, headline) => {
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
      this.storyDisplays.push({ textObject: this.add.text(window.innerWidth, y, text), text, posX: window.innerWidth });
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
    if (this.storyDisplays.length === 0 || _.last(this.storyDisplays).textObject.displayWidth + padding < window.innerWidth - _.last(this.storyDisplays).posX) {
      this.readyToDisplayNextStory = true;
    }
  }

  private addStory(headline: string) {
    this.storyQueue.push(headline);
  }
}
