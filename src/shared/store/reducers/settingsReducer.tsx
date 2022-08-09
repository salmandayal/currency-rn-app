import {createSlice} from '@reduxjs/toolkit';
import {AppTheme, blueTheme} from 'shared/theme';

export interface SettingsState {
  darkMode: boolean;
  theme: AppTheme;
}

const initialState: SettingsState = {
  darkMode: false,
  theme: blueTheme,
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
  },
});

export const {setDarkMode, setTheme, resetSettings} = settingsSlice.actions;

export default settingsSlice.reducer;
