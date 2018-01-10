// First we do our imports
import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import createActionBuffer from 'redux-action-buffer'
import { REHYDRATE } from 'redux-persist/constants'
import { createMiddleware as createBeaconMiddleware } from 'redux-beacon';
import { logger as beaconLogger } from 'redux-beacon/extensions/logger';
import { Segment } from 'redux-beacon/targets/segment';
import { offlineReactNative } from 'redux-beacon/extensions/offline-react-native';
// We also import our own files
import getRootReducer from 'reducers/index';
import sagas from 'sagas/index';
import eventsMap from 'beacon-events';
import getConnected from 'selectors/connected';

// Ignore
const loggerMiddleware = createLogger({
  // options...
});

// Ignore
const middlewares = [];

// Ignore
if (__DEV__ === true) {
  middlewares.push(loggerMiddleware);
}

// We create our sagaMiddleware object which we can use to connect our rootSaga
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// Ignore
const offlineStorage = offlineReactNative(AsyncStorage, getConnected);
const beaconMiddleware = createBeaconMiddleware(
  eventsMap,
  Segment,
  { beaconLogger, offlineStorage },
);
middlewares.push(beaconMiddleware);

// Our enhancer composes all of our middlewares; in this case it's just
// the sagaMiddleware
const enhancer = compose(
  applyMiddleware(...middlewares),
);

// Our getStore function will take our navReducer, combine it with our other
// reducers (via getRootReducer), and combine those with our middlewares to
// create a store object. Before returning the store object, we run our sagas.
export default function getStore(navReducer) {
  const store = createStore(
      getRootReducer(navReducer),
      {},                           // initial state
      enhancer,
  );
  sagaMiddleware.run(sagas);
  return store;
}
