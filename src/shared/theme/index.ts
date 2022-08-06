import {store} from 'shared/store';
import {RF} from './responsive';

export const THEME = {
  COLORS: {
    primaryDarkBackground: '#242E42',
    primaryLightBackground: '#F7F7F7',
    secondaryDarkBackground: '#2F3B52',
    secondaryLightBackground: '#ffffff',
    changeGreen: '#00C053',
    changeRed: '#ff3939',
    yellow: '#E4B40E',
    text: '#000',
    purple: '#6829E1',
    accentBlue: '#27A3E3',
    lightBlue: '#209EE2',
    textLight: '#928FA3',
    disabledTextLight: '#7f7e83',
    textExtraLight: 'rgba(146, 143, 163, 0.4)',
    green: '#1CD983',
    blue: '#4C7BF6',
    red: '#FF0000',
    countRed: '#FD6969',
    gold: '#F89F36',
    white: '#fff',
    black: '#000',
    gradientTopColor: '#269CDD',
    gradientBottomColor: '#235DAC',
    dottedBorder: '#20FFFF',
    tabColor: '#131C3F',
    chartColor: '#5E93E3',
    biometryCircleButtonColor: '#414A5B',
    reddishBackground: '#e6d7d7',
    lightGrey: '#7F819A',
    modalBackground: 'rgba(0,0,0,0.4)',
    backgroundGold: '#383B3C',
    sharpGreen: '#62BD00',
    darkGray: 'gray',
    alertDarkBackground: '#3C3E3B',
    alertLightBackground: '#535751',
    WHITE_TRANS: 'rgba(255,255,255,0.3)',
    BLACK_TRANS: 'rgba(0,0,0,0.3)',
  },
  FONTS: {
    SIZE: {
      XXLARGE: RF(32),
      XLARGE: RF(24),
      LARGE: RF(20),
      MEDIUM: RF(18),
      SMALL: RF(16),
      XSMALL: RF(14),
      XXSMALL: RF(12),
      XXXSMALL: RF(10),
      XXXXSMALL: RF(8),
    },
    TYPE: {
      LIGHT: 'Lato-Light',
      REGULAR: 'Lato-Regular',
      MEDIUM: 'Lato-Bold',
      SEMIBOLD: 'Lato-Bold',
      BOLD: 'Lato-Black',
    },
  },
  MARGIN: {
    SUPERLOW: RF(2),
    VERYLOW: RF(4),
    LOW: RF(8),
    MID_LOW: RF(12),
    NORMAL: RF(16),
    HIGH: RF(24),
    VERYHIGH: RF(32),
    SUPERHIGH: RF(48),
    NOVAHIGH: RF(60),
  },
  PADDING: {
    SUPERLOW: RF(2),
    VERYLOW: RF(4),
    LOW: RF(8),
    NORMAL: RF(16),
    HIGH: RF(24),
    VERYHIGH: RF(32),
    SUPERHIGH: RF(48),
    NOVAHIGH: RF(60),
    HYPERHIGH: RF(70),
  },
  RADIUS: {
    BOX: RF(10),
    SMALLBOX: RF(5),
    OVAL: RF(24),
  },
};

export const appTheme = (darkMode: boolean) => {
  return {
    // @ts-ignore
    colors: {
      background: darkMode
        ? THEME.COLORS.primaryDarkBackground
        : THEME.COLORS.primaryLightBackground,
    },
  };
};
