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
