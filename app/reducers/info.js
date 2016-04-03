/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type?: string,
  index? : number,
};

const initialState = {
  pageIndex: 0,
};

export default function info(state:Object = initialState, action:Action = {}): Object {
  switch (action.type) {
    case types.SET_INFO_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.index,
      };
    default:
      return state;
  }
}
