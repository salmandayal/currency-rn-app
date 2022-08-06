import {createSlice} from '@reduxjs/toolkit';

export interface SettingsState {
  darkMode: boolean;
}

const initialState: SettingsState = {
  darkMode: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    resetSettings: () => initialState,
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const {setDarkMode, resetSettings} = settingsSlice.actions;

export default settingsSlice.reducer;
