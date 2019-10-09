import React from 'react';
import { reducer as reduceState } from './reducer';
import initialState from './state';
import { createStore } from 'redux';

const LOCALSTORAGEKEY = "DECKJSON";

const getInitialState = () => {
  var data = localStorage.getItem(LOCALSTORAGEKEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {}
  }

  return initialState;
} 

export const reducer = (state = getInitialState(), action) => {
  const newState = reduceState(state, action);
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(newState));
  return newState;
}

export const context = React.createContext(null);

export const store = createStore(reducer);

export default { store, reducer, context };
