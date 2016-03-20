/* @flow */
'use strict';

import React, {
  Component,
  AsyncStorage,
} from 'react-native';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import Phonapi from './Phonapi';

const composeMiddleware = compose(applyMiddleware(thunk), autoRehydrate());
const createStoreWithMiddleware = composeMiddleware(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);



export default class App extends Component {
  componentWillMount() {
    persistStore(store, {
      storage: AsyncStorage,
      blacklist: ['onCall']
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Phonapi />
      </Provider>
    );
  }
}
