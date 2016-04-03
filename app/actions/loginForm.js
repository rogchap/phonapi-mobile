/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';
import { navigateReset } from './navigation';

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

function setLoading(isLoading: boolean): Action {
  return {
    type: types.SET_LOGIN_LOADING,
    isLoading,
  }
}

function resetLoadingForm(): Action {
  return {
    type: types.RESET_LOGIN_FORM,
  }
}

export function loginWithPassword(): ?Function {
  return function(dispatch, getStore) {
    dispatch(setLoading(true));
    const { loginForm } = getStore();

    //TODO Authenticate with server
    setTimeout(() => {
      dispatch(resetLoadingForm());
      dispatch(navigateReset('Home'));
    }, 2000);
  }
}
