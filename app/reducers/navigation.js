/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type?: string,
}

const initialState = {
  index: 0,
  children: [
    { key: 'Info' },
  ],
}

export default function navigation(state:Object = initialState, action:Action = {}): Object {
  const lastChildren = state.children;

  switch (action.type) {
    case types.NAV_PUSH:
      return {
        ...state,
        children: [
          ...lastChildren,
          { key: action.key },
        ],
        index: lastChildren.length,
      };
    case types.NAV_POP:
      return {
        ...state,
        children: lastChildren.slice(0, lastChildren.length - 1),
        index: lastChildren.length - 2,
      };
    case types.NAV_RESET:
      return {
        index: 0,
        children: [
          { key: action.key },
        ],
      }
    default:
      return state;
  }
}
