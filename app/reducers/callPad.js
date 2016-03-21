/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type?: string,
  code?: string,
  show?: boolean,
  char?: string,
}

const initialState = {
  countryCode: 'AU',
  showDialCodePicker: false,
  numberToDial: '',
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
    case types.ADD_DIGIT_TO_NUMBER:
      return {
        ...state,
        numberToDial: state.numberToDial + action.char,
      };
    case types.REMOVE_DIGIT_FROM_NUMBER:
      return {
        ...state,
        numberToDial: state.numberToDial.slice(0,-1),
      };
    case types.CLEAR_NUMBER:
      return {
        ...state,
        numberToDial: '',
      };
    case types.CONVERT_LAST_DIGIT:
      const n = state.numberToDial.slice(0,-1);
      return {
        ...state,
        numberToDial: n + action.char,
      };
    default:
      return state;
  }
}
