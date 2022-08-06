import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  password: string;
  data?: Array<Data>;
  loading?: boolean;
}

export interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState: UserState = {
  email: '',
  password: '',
  data: [],
  loading: false,
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
    getDataFetch: state => {
      state.loading = true;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    getDataFailure: state => {
      state.loading = true;
    },
  },
});

export const {
  resetUser,
  getDataFetch,
  getDataSuccess,
  getDataFailure,
  setUser,
} = userSlice.actions;

export default userSlice.reducer;
