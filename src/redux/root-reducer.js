import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/authSlice';

import newsReducer from './news/news-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'user'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  news: newsReducer,
});

export default persistedReducer;
