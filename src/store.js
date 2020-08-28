import thunk from 'redux-thunk';
import dynamic from 'next/dynamic';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

export default function configureStore(preloadState) {
  const store = createStore(
    combineReducers({
      ...reducers,
    }), preloadState,
    composeWithDevTools(compose(
      applyMiddleware(thunk),
      applyMiddleware(batchDispatchMiddleware),
    )),
  );

  // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createNextReducer = dynamic(() => import('./reducers'));
      store.replaceReducer(createNextReducer(preloadState));
    });
  }

  return store;
}
