/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type?: string,
  authToken?: string,
}

const initialState = {
  authToken: '',
}

export default function user(state:Object = initialState, action: Action = {}): Object {
  if (action.type === types.RESET) {
    return initialState;
  }
  if (action.type === types.SET_AUTH_TOKEN) {
    console.log('action:', action.authToken);
    return { ...state, authToken: action.authToken }
  }
  return state;
}
