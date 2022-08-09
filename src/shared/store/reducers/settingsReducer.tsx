import {createSlice} from '@reduxjs/toolkit';
import {AppTheme, blueTheme, orangeTheme} from 'shared/theme';

export interface SettingsState {
  darkMode: boolean;
  theme: AppTheme;
  baseCurrency: string;
  counterCurrency: string;
}

const initialState: SettingsState = {
  darkMode: false,
  theme: orangeTheme,
  baseCurrency: 'USD',
  counterCurrency: 'EUR',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    resetSettings: () => initialState,
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
    setCounterCurrency: (state, action) => {
      state.counterCurrency = action.payload;
    },
  },
});

export const {
  setDarkMode,
  setTheme,
  resetSettings,
  setBaseCurrency,
  setCounterCurrency,
} = settingsSlice.actions;

export default settingsSlice.reducer;
