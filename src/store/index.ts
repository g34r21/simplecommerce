import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import cart from './slices/cart';
import catalog from './slices/catalog';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCart = persistReducer(persistConfig, cart);

export const rootReducer = combineReducers({
  cart: persistedCart,
  catalog,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
