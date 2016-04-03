/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type StateKey = 'emailText' | 'passwordText' | 'emailValid' | 'passwordValid';

type Action = {
  type?: string,
  key?: StateKey,
  value?: string,
  nextState?: Object,
  isLoading?: boolean,
};

const initialState = {
  emailText: '',
  passwordText: '',
  emailValid: true,
  passwordValid: true,
  isLoggingIn: false,
};

export default function loginForm(state:Object = initialState, action:Action = {}): Object {
  switch (action.type) {
    case types.CHANGE_TEXTFIELD_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case types.CHANGE_INPUT_ERROR:
      return {
        ...state,
        ...action.nextState,
      };
      case types.SET_LOGIN_LOADING:
      return {
        ...state,
        isLoggingIn: action.isLoading,
      };
    case types.RESET_LOGIN_FORM:
      return initialState;
    default:
      return state;
  }
}
