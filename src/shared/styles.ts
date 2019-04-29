export const backgroundColor = '#A29771';
export const foregroundColor = '#2B261C';
export const textColor = '#CDCBC2';
export const detailDarkColor = '#817C6A';
export const detailLightColor = '#F2E9CC';
export const buttonTextColor = '#4E4626';

export const backgroundColorHex = 0xA29771;
export const foregroundColorHex = 0x2B261C;
export const textColorHex = 0xCDCBC2;
export const detailDarkColorHex = 0x817C6A;
export const detailLightColorHex = 0xF2E9CC;
export const buttonTextColorHex = 0x4E4626;

export const listItemStyle = { fontSize: '14px', color: textColor };
export const tradeAmountText = { fontSize: '12px', color: textColor };
export const availableRoot = { fontSize: '16px', color: '#89F663' };
export const buttonLabelStyle = { fontSize: '14px', color: foregroundColor };

export const foregroundStyle = { color: foregroundColor };

export const selectedTab = { fontSize: '16px', color: backgroundColor, backgroundColor: buttonTextColor };
export const unselectedTab = { fontSize: '16px', color: buttonTextColor, backgroundColor: backgroundColor };

export const offset = 10;

export const width = 1024;
export const height = 768;
export const inputBoxWidth = 150;


export const basicallyHidden = 0.000000000001; // setting alpha to 0 on some elements prevents us from showing them again

export const tradePage = {
  currencyList: {
    width: 707,
    height: 534,
    x: offset,
    y: 150,
    itemColor: textColor,
    headerColor: backgroundColor,
    headerHeight: 45,
    listItemX: offset * 2,
    listItemY: 195,
  },
  tradeInterface: {
    x: 707 + 2 * offset,
    exchangeTabY: 150,
    inputBoxX: width - offset - inputBoxWidth,
  },
  transactionWidth: 287,
  usernameWidth: 254,
  usernameHeight: 30,
  inputWidth: 143,
  inputHeight: 39,
  selectedLineItemHex: 0x3E3E3D,
}

export const cultPage = {
  followerList: {
    width: 580,
    height: 534,
    x: offset,
    y: 150,
    itemColor: textColor,
    headerColor: backgroundColor,
    headerHeight: 45,
    listItemX: offset * 2,
    listItemY: 195,
  },
  options: {
    labelStyle: buttonLabelStyle,
    buttonOffsetHeight: 75,
    buttonX: 850,
    labelX: 600, // Styles.cultPage.followerList.width + Styles.offset * 2
  },
  happiness: {
    x: 600,
    labelY: 525,
    meterY: 550,
    meterWidth: 415,
    meterHeight: 50,
  },
  donation: {
    labelX: 600,
    inputX: 850,
    y: 650,
  }
}
export const tabY = 117;
export const lineItemHeight = 30;

export const tickerWidth = 1004;
export const tickerHeight = 50;
