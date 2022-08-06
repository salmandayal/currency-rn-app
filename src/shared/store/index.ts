import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import MMKVStorage from 'react-native-mmkv-storage';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers/userReducer';
import settingsReducer from './reducers/settingsReducer';
import saga from './saga';

const storage = new MMKVStorage.Loader().initialize();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'settings'],
};

const reducers = combineReducers({
  user: userReducer,
  settings: settingsReducer,
});

let sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({serializableCheck: false, thunk: false}),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(saga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
