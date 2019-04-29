import * as CultDomain from 'src/domain/cult';
import * as Styles from 'src/shared/styles';
import { addRectangle } from 'src/components/rectangle';
import { createButton } from 'src/components/button';
import { DomainEvents } from 'src/domain';
import { createInputBox } from '../input-box';

export const createCultInterface = (scene: Phaser.Scene, domainState: CultDomain.CultDomainState) => {
  const cultContainer = scene.add.container(0, 0);

  createCultInfo(scene, cultContainer, domainState);
  createCultOptions(scene, cultContainer);
  createCultHappinessMeter(scene, cultContainer, domainState);
  createCultSuggestedDonationInput(scene, cultContainer, domainState);

  return cultContainer;
};

const infoRowStyle = Styles.listItemStyle;

const infoRowTextX = 20;
const infoRowValueX = 450;

const infoRowStartY = Styles.cultPage.followerList.y + Styles.offset;

const createCultInfo = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: CultDomain.CultDomainState) => {
  container.add(addRectangle(scene,
    Styles.cultPage.followerList.x,
    Styles.cultPage.followerList.y,
    Styles.cultPage.followerList.width,
    Styles.cultPage.followerList.height,
    Styles.foregroundColorHex,
  ));

  container.add([
    scene.add.text(infoRowTextX, infoRowStartY, 'Followers', infoRowStyle),
    scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 1), 'Capacity', infoRowStyle),
    scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 2), 'New Followers per Tick', infoRowStyle),
    scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 3), 'Donations per Tick', infoRowStyle),
  ])

  const followersValue = scene.add.text(infoRowValueX, infoRowStartY, domainState.followers.toFixed(2), infoRowStyle);
  const capacityValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 1), `${domainState.capacity}`, infoRowStyle);
  const followersPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 2), domainState.followersPerTick.toFixed(2), infoRowStyle);
  const donationsPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 3), (domainState.followers * domainState.suggestedDonation).toFixed(2), infoRowStyle);

  domainState.events.on(DomainEvents.followerCountChanged, () => {
    followersValue.text = domainState.followers.toFixed(2);
    donationsPerTickValue.text = (domainState.followers * domainState.suggestedDonation).toFixed(2);
  });

  domainState.events.on(DomainEvents.cultCapacityChanged, () => {
    capacityValue.text = domainState.capacity.toString();
  });

  container.add([followersValue, capacityValue, followersPerTickValue, donationsPerTickValue]);
};

const optionsRowTextX = Styles.cultPage.options.labelX;
const optionsRowButtonX = Styles.cultPage.options.buttonX;

const optionsRowStartY = Styles.cultPage.followerList.y + Styles.offset;
const buttonOffsetHeight = Styles.cultPage.options.buttonOffsetHeight;

const createCultOptions = (scene: Phaser.Scene, container: Phaser.GameObjects.Container) => {
  container.add([
    scene.add.text(optionsRowTextX,Styles.offset + optionsRowStartY, 'Build Promotional Website', Styles.cultPage.options.labelStyle),
    ...createButton(scene, optionsRowButtonX, optionsRowStartY, '1,000,000', () => { }),

    scene.add.text(optionsRowTextX,Styles.offset + optionsRowStartY + buttonOffsetHeight * 1, 'Construct Church', Styles.cultPage.options.labelStyle),
    ...createButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 1, '3,000,000', () => { }),

    scene.add.text(optionsRowTextX,Styles.offset + optionsRowStartY + buttonOffsetHeight * 2, 'Build Complex', Styles.cultPage.options.labelStyle),
    ...createButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 2, '15,000,000', () => { }),
  ]);

};

const createCultHappinessMeter = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: CultDomain.CultDomainState) => {
  const innerMeterWidth = Styles.cultPage.happiness.meterWidth - Styles.offset;
  const currentHappinessMeter = scene.add.rectangle(Styles.cultPage.happiness.x + Styles.offset * 0.5, Styles.cultPage.happiness.meterY + Styles.offset * 0.5, innerMeterWidth, Styles.cultPage.happiness.meterHeight - Styles.offset, 0xFF0000).setOrigin(0, 0);

  domainState.events.on(DomainEvents.cultHappinessChanged, () => {
    currentHappinessMeter.width = innerMeterWidth * domainState.happiness * 0.01;
    currentHappinessMeter.fillColor = domainState.happiness > 60
      ? 0x00FF00
      : domainState.happiness > 30
        ? 0xFFF000
        : 0xFF0000;
  });

  container.add([
    scene.add.text(Styles.cultPage.happiness.x, Styles.cultPage.happiness.labelY, 'Follower Happiness', Styles.cultPage.options.labelStyle),
    ...addRectangle(scene, Styles.cultPage.happiness.x, Styles.cultPage.happiness.meterY, Styles.cultPage.happiness.meterWidth, Styles.cultPage.happiness.meterHeight, Styles.foregroundColorHex),
    currentHappinessMeter,
  ]);
};

const createCultSuggestedDonationInput = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: CultDomain.CultDomainState) => {
  const inputBox = createInputBox(scene, Styles.cultPage.donation.inputX, Styles.cultPage.donation.y, (text: string) => {
    const inputtedNumber = Number.parseFloat(text);

    CultDomain.changeSuggestedDonation(domainState, inputtedNumber);
  }, 12, true);

  // TODO: Ew. This sucks. We should return an object or something easier to work with.
  (inputBox[6] as Phaser.GameObjects.Text).text = domainState.suggestedDonation.toString();

  container.add([
    ...inputBox,
    scene.add.text(Styles.cultPage.donation.labelX, Styles.cultPage.donation.y, 'Suggested Weekly Donation', Styles.cultPage.options.labelStyle),
  ]);
};
