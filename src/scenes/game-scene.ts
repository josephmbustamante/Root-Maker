
const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
    // this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'sample');
    this.createNewsTicker(0, 0);
  }

  public update() {
    // TODO
    this.addStory(`Story ${this.counter}`);
    this.counter++;
    this.updateStories();
  }

  private counter = 0;
  private stories: string[] = [
  ];
  private storyDisplays: Phaser.GameObjects.Text[] = [];
  private maxStories = 10;
  private tickerX: number;
  private tickerY: number;
  private createNewsTicker(x: number, y: number) {
    this.tickerX = x;
    this.tickerY = y;
    this.add.text(x, y, 'BREAKING NEWS');
    this.updateStories();
  }
  private updateStories() {
    const spacing = 20;
    const x = this.tickerX + spacing;
    const y = this.tickerY + spacing;
    this.storyDisplays.forEach((story) => {
      story.destroy();
    })
    this.storyDisplays = [];
    this.stories.forEach((story, index) => {
      this.storyDisplays.push(this.add.text(x, y + (spacing * index) , story));
    });
  }

  private addStory(headline: string) {
    if (this.stories.length === 10) {
      this.stories.pop();
    }
    this.stories.unshift(headline);
  }
}
