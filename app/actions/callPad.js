/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type: string,
};

export function changeCountryCode(code: string): Action {
  return {
    type: types.CHANGE_COUNTRYCODE,
    code,
  };
}

export function shouldShowDialCodePicker(show: bool): Action {
  return {
    type: types.SHOW_DIALCODE_PICKER,
    show,
  };
}

export function addDigit(char: string): Action {
  return {
    type: types.ADD_DIGIT_TO_NUMBER,
    char,
  };
}

export function removeLastDigit(): Action {
  return {
    type: types.REMOVE_DIGIT_FROM_NUMBER,
  };
}

export function changeLastDigitTo(char: string): Action {
  return {
    type: types.CONVERT_LAST_DIGIT,
    char,
  };
}

export function clear(): Action {
  return {
    type: types.CLEAR_NUMBER,
  };
}
