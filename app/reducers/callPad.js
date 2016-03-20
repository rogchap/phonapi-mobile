/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type?: string,
  code?: string,
  show?: boolean,
}

const initialState = {
  countryCode: 'AU',
  showDialCodePicker: false,
}

export default function callPad(state:Object = initialState, action:Action = {}): Object {
  switch (action.type) {
    case types.CHANGE_COUNTRYCODE:
      return {
        ...state,
        countryCode: action.code,
      };
    case types.SHOW_DIALCODE_PICKER:
      return {
        ...state,
        showDialCodePicker: action.show,
      };
    default:
      return state;
  }
}
