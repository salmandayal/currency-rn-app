import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import MMKVStorage from 'react-native-mmkv-storage';
import userReducer from './reducers/userReducer';

const storage = new MMKVStorage.Loader().initialize();

declare var window: any;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const reducers = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
