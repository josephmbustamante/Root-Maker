import * as CultDomain from 'src/domain/cult';
import * as Domain from 'src/domain';
import * as Styles from 'src/shared/styles';
import * as Shared from 'src/shared';
import { addRectangle } from 'src/components/rectangle';
import { createOneTimeButton } from 'src/components/button';
import { DomainEvents } from 'src/domain';
import { createInputBox } from '../input-box';

export const createCultInterface = (scene: Phaser.Scene, domainState: Domain.DomainState) => {
  const cultContainer = scene.add.container(0, 0);

  createCultInfo(scene, cultContainer, domainState);
  createCultOptions(scene, cultContainer, domainState);
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
    scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 2), 'New Follower Rate', infoRowStyle),
    scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 3), 'Donation Rate', infoRowStyle),
  ])

  const followersValue = scene.add.text(infoRowValueX, infoRowStartY, Shared.formatNumberForDisplay(domainState.followers), infoRowStyle);
  const capacityValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 1), Shared.formatNumberForDisplay(domainState.capacity), infoRowStyle);
  const followersPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 2), Shared.formatNumberForDisplay(domainState.actualNewFollowersPerTick), infoRowStyle);
  const donationsPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 3), Shared.formatNumberForDisplay(CultDomain.calculateDonationPerTick(domainState)), infoRowStyle);

  domainState.events.on(DomainEvents.followerCountChanged, () => {
    followersValue.text = Shared.formatNumberForDisplay(domainState.followers);
    donationsPerTickValue.text = Shared.formatNumberForDisplay(domainState.followers * domainState.suggestedDonation);
  });

  domainState.events.on(DomainEvents.cultCapacityChanged, () => {
    capacityValue.text = Shared.formatNumberForDisplay(domainState.capacity);
  });

  domainState.events.on(DomainEvents.followersPerTickChanged, () => {
    followersPerTickValue.text = Shared.formatNumberForDisplay(domainState.actualNewFollowersPerTick);
  });

  domainState.events.on(DomainEvents.suggestedDonationChanged, () => {
    donationsPerTickValue.text = Shared.formatNumberForDisplay(CultDomain.calculateDonationPerTick(domainState));
  });

  container.add([followersValue, capacityValue, followersPerTickValue, donationsPerTickValue]);
};

const optionsRowTextX = Styles.cultPage.options.labelX;
const optionsRowButtonX = Styles.cultPage.options.buttonX;

const optionsRowStartY = Styles.cultPage.followerList.y + Styles.offset;
const buttonOffsetHeight = Styles.cultPage.options.buttonOffsetHeight;

const createCultOptions = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: Domain.DomainState) => {
  let buildWebsiteButton = createOneTimeButton(scene, optionsRowButtonX, optionsRowStartY, '1,000,000', () => { CultDomain.buildWebsite(domainState) });
  let buildChurchButton = createOneTimeButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 1, '3,000,000', () => { CultDomain.buildChurch(domainState) });
  let buildComplexButton = createOneTimeButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 2, '15,000,000', () => { CultDomain.buildComplex(domainState) });

  // domainState.events.on(DomainEvents.cultWebsiteBuilt, () => buildWebsiteButton.forEach(e => e.setVisible(false)));
  // domainState.events.on(DomainEvents.cultChurchBuilt, () => buildChurchButton.forEach(e => e.setVisible(false)));
  // domainState.events.on(DomainEvents.cultComplexBuilt, () => buildComplexButton.forEach(e => e.setVisible(false)));

  container.add([
    scene.add.text(optionsRowTextX,Styles.offset + optionsRowStartY, 'Build Promotional Website', Styles.cultPage.options.labelStyle),
    ...buildWebsiteButton.elements,
    scene.add.text(optionsRowTextX,Styles.offset + optionsRowStartY + buttonOffsetHeight * 1, 'Construct Church', Styles.cultPage.options.labelStyle),
    ...buildChurchButton.elements,
    scene.add.text(optionsRowTextX,Styles.offset + optionsRowStartY + buttonOffsetHeight * 2, 'Build Complex', Styles.cultPage.options.labelStyle),
    ...buildComplexButton.elements,
  ]);

};

const createCultHappinessMeter = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: CultDomain.CultDomainState) => {
  const currentHappinessMeter = scene.add.rectangle(Styles.cultPage.happiness.x + Styles.offset * 0.5, Styles.cultPage.happiness.meterY + Styles.offset * 0.5, 1, Styles.cultPage.happiness.meterHeight - Styles.offset, 0xFF0000).setOrigin(0, 0);
  setHappinessMeterWidth(currentHappinessMeter, domainState);

  domainState.events.on(DomainEvents.cultHappinessChanged, () => {
    setHappinessMeterWidth(currentHappinessMeter, domainState);
  });

  container.add([
    scene.add.text(Styles.cultPage.happiness.x, Styles.cultPage.happiness.labelY, 'Follower Happiness', Styles.cultPage.options.labelStyle),
    ...addRectangle(scene, Styles.cultPage.happiness.x, Styles.cultPage.happiness.meterY, Styles.cultPage.happiness.meterWidth, Styles.cultPage.happiness.meterHeight, Styles.foregroundColorHex),
    currentHappinessMeter,
  ]);
};

const setHappinessMeterWidth = (meter: Phaser.GameObjects.Rectangle, domainState: CultDomain.CultDomainState) => {
  const innerMeterWidth = Styles.cultPage.happiness.meterWidth - Styles.offset;

  meter.width = innerMeterWidth * domainState.happiness * 0.01 || 1; // Always have some bar showing
  meter.fillColor = domainState.happiness > 70
    ? 0x00FF00
    : domainState.happiness > 40
      ? 0xFFF000
      : 0xFF0000;
};

const createCultSuggestedDonationInput = (scene: Phaser.Scene, container: Phaser.GameObjects.Container, domainState: CultDomain.CultDomainState) => {
  const inputBox = createInputBox(scene, Styles.cultPage.donation.inputX, Styles.cultPage.donation.y, (text: string) => {
    const inputtedNumber = Number.parseFloat(text);
    // Don't change anything when the user backspaces all the way or enters 0
    if (inputtedNumber >= 1) {
      CultDomain.changeSuggestedDonation(domainState, inputtedNumber);
    }
  }, 12, true);

  // TODO: Ew. This sucks. We should return an object or something easier to work with.
  (inputBox[6] as Phaser.GameObjects.Text).text = Shared.formatNumberForDisplay(domainState.suggestedDonation);

  container.add([
    ...inputBox,
    scene.add.text(Styles.cultPage.donation.labelX, Styles.cultPage.donation.y + 5, '"Recommended" Weekly Donation', Styles.cultPage.options.labelStyle),
  ]);
};
