/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type: string,
};

export function navigateBack(): Action {
  return {
    type: types.NAV_POP,
  };
}

export function navigatePush(key: string): Action {
  return {
    type: types.NAV_PUSH,
    key,
  };
}

export function navigateReset(key: string): Action {
  return {
    type: types.NAV_RESET,
    key,
  };
}
