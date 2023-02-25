import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ItemsSlice } from './items';
import { authReducer } from './authorization';

const newsPersistConfig = {
  key: 'news',
  version: 1,
  storage,
  blacklist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
};

/* const persistedNewsReducer = persistReducer(newsPersistConfig, ItemsSlice.reducer); */
/* const persistedAuthReducer = persistReducer(authPersistConfig, authReducer.reducer);

const art = persistReducer(newsPersistConfig, ItemsSlice.reducer); */

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer.reducer),
  news: ItemsSlice.reducer,
});

const persistedReducer = persistReducer(newsPersistConfig, rootReducer);
////////Store///////////////////

const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { store, persistor };
