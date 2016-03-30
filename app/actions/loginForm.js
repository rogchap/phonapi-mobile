/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type: string,
};

export function changeInputText(key: string, value: string): Action {
  return {
    type: types.CHANGE_TEXTFIELD_VALUE,
    key,
    value,
  };
}

export function changeInputErrors(nextState: Object): Action {
  return {
    type: types.CHANGE_INPUT_ERROR,
    nextState,
  };
}
