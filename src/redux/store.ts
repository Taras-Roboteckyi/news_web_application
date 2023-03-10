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

import { PostsSlice } from './posts';
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

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer.reducer),
  news: PostsSlice.reducer,
});

const persistedReducer = persistReducer(newsPersistConfig, rootReducer); //do not use, because the posts are not updated

////////Store///////////////////

const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

//Redux Toolkit TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
