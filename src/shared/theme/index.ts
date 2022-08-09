import {store} from 'shared/store';
import {DefaultTheme} from 'styled-components/native';
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
    disabledTextLight: '#7f7e83',
    textExtraLight: 'rgba(146, 143, 163, 0.4)',
    green: '#1CD983',
    blue: '#4C7BF6',
    red: '#FF0000',
    countRed: '#FD6969',
    gold: '#F89F36',
    white: '#fff',
    black: '#000',
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

export const blueTheme = {
  mode: 'blue',
  colors: {
    PRIMARY_BACKGROUND_COLOR: '#3120E0',
    SECONDARY_BACKGROUND_COLOR: '#3B9AE1',
    PRIMARY_TEXT_COLOR: '#F0EABE',
    PRIMARY_BUTTON_TEXT_COLOR: '#F0EABE',
  },

  STATUS_BAR_STYLE: 'light-content',
};
export const greenTheme = {
  mode: 'green',
  colors: {
    PRIMARY_BACKGROUND_COLOR: '#2B7A0B',
    SECONDARY_BACKGROUND_COLOR: '#5BB318',
    PRIMARY_TEXT_COLOR: '#E8F9FD',
    PRIMARY_BUTTON_TEXT_COLOR: '#E8F9FD',
  },
  STATUS_BAR_STYLE: 'light-content',
};
export const orangeTheme = {
  mode: 'orange',
  colors: {
    PRIMARY_BACKGROUND_COLOR: '#D1512D',
    SECONDARY_BACKGROUND_COLOR: '#411530',
    PRIMARY_TEXT_COLOR: '#F5E8E4',
    PRIMARY_BUTTON_TEXT_COLOR: '#F5E8E4',
  },
  STATUS_BAR_STYLE: 'dark-content',
};
export const purpleTheme = {
  mode: 'purple',
  colors: {
    PRIMARY_BACKGROUND_COLOR: '#100720',
    SECONDARY_BACKGROUND_COLOR: '#31087B',
    PRIMARY_TEXT_COLOR: '#FFC23C',
    PRIMARY_BUTTON_TEXT_COLOR: '#FFC23C',
  },
  STATUS_BAR_STYLE: 'dark-content',
};

export type AppTheme = typeof blueTheme;
