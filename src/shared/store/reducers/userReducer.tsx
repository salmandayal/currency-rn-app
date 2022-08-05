import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  password: string;
}

const initialState: UserState = {
  email: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: () => initialState,
    setUser: (state, action: {type: string; payload: UserState}) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setUserEmail: (state, action: {type: string; payload: string}) => {
      state.email = action.payload;
    },
  },
});

export const {resetUser, setUser, setUserEmail} = userSlice.actions;

export default userSlice.reducer;
