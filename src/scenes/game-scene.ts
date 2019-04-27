import * as _ from 'lodash';
import * as Domain from '../domain/trading';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  domainState: Domain.DomainState;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.domainState = Domain.initState({
      nations: [
        {
          currency: 'DOLLA',
          nation: 'Hudsonville',
        },
        {
          currency: 'mud',
          nation: 'Jenison',
        },
      ],
      rootCurrencyName: 'BILLS',
      rootCurrencyStartingAmount: 30,
    })
    this.createNewsTicker(0, window.innerHeight - 50);
  }

  public update() {
    // TODO
    // this.addStory(`Story ${this.counter}`);
    // this.counter++;
    Domain.runRandomNationEvents(this.domainState);
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
    this.domainState.events.on(Domain.DomainEvents.nationEventOccurred, (nation, event) => {
      this.addStory(`${nation.name} ${event.headline}`);
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
    if (this.storyDisplays.length === 0 || _.last(this.storyDisplays).textObject.displayWidth + padding <  window.innerWidth - _.last(this.storyDisplays).posX) {
      this.readyToDisplayNextStory = true;
    }
  }

  private addStory(headline: string) {
    this.storyQueue.push(headline);
  }
}
