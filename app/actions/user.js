/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type: string,
  authToken?: string,
};

export function setAuthToken(authToken: string): Action {
  return {
    type: types.SET_AUTH_TOKEN,
    authToken,
  };
}
