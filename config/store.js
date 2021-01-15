import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import createSagaMiddleware from 'redux-saga';

import AsyncStorage from '@react-native-community/async-storage';

import reducers from 'ducks';
import rootSaga from 'sagas';

let createAppStore;
let store;

const sagaMiddleware = createSagaMiddleware();

createAppStore = applyMiddleware(sagaMiddleware)(createStore);

const whitelistReducer = ['persist'];

const configureStore = onComplete => {
  store = autoRehydrate()(createAppStore)(reducers);
  persistStore(store, { storage: AsyncStorage, whitelist: whitelistReducer }, onComplete);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;

export const getStore = () => store;
