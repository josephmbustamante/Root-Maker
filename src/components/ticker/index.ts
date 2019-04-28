import * as Shared from 'src/shared';
import * as Styles from 'src/shared/styles';
import { DomainEvents, DomainState } from 'src/domain';
import * as _ from 'lodash';
import { addRectangle } from '../rectangle';

interface StoryDisplay {
  text: string;
  textObject: Phaser.GameObjects.Text;
  posX: number;
};

export interface TickerState {
  storyQueue: string[];
  storyDisplays: StoryDisplay[];
  readyToDisplayNextStory: boolean;
}

const tickerY = 710;
const tickerHeight = 50;

export const createNewsTicker = (scene: Phaser.Scene, domainState: DomainState) => {
  const tickerState: TickerState = {
    storyQueue: [],
    storyDisplays: [],
    readyToDisplayNextStory: false,
  };

  const gameWidth = Shared.getGameWidth(scene);

  addRectangle(scene, Styles.offset, tickerY, gameWidth - Styles.offset * 2, tickerHeight, Styles.foregroundColorHex);

  domainState.trading.events.on(DomainEvents.nationEventOccurred, (nation, headline) => {
    tickerState.storyQueue.push(`${nation.name} ${headline}`);
  });
  domainState.trading.events.on(DomainEvents.nationEventEnded, (nation, headline) => {
    tickerState.storyQueue.push(`${nation.name} ${headline}`);
  });

  updateStories(scene, tickerState);

  return tickerState;
};

let readyToDisplayNextStory = true;

export const updateStories = (scene: Phaser.Scene, tickerState: TickerState) => {
  const shouldBuildStory = readyToDisplayNextStory && (tickerState.storyQueue.length > 0);
  const gameWidth = Shared.getGameWidth(scene);

  if (shouldBuildStory) {
    const text = tickerState.storyQueue.shift();
    tickerState.storyDisplays.push({ textObject: scene.add.text(gameWidth, tickerY, text), text, posX: gameWidth });
    readyToDisplayNextStory = false;
  }

  tickerState.storyDisplays.forEach((story) => {
    story.textObject.destroy();
    story.posX -= 2;
    story.textObject = scene.add.text(story.posX, tickerY, story.text);
  });

  tickerState.storyDisplays = tickerState.storyDisplays.filter((story) => {
    const offScreen = story.textObject.displayWidth + story.posX < 0;
    if (offScreen) {
      story.textObject.destroy();
      return false;
    }
    return true;
  });

  const padding = 100;

  if (tickerState.storyDisplays.length === 0 || _.last(tickerState.storyDisplays).textObject.displayWidth + padding < gameWidth - _.last(tickerState.storyDisplays).posX) {
    readyToDisplayNextStory = true;
  }
};
