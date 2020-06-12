import 'react-native-gesture-handler';
import React from 'react';
import allReducers from './reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import Root from './Root';

const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
