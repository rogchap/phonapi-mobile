/* @flow */
'use strict';

import {
  Alert
} from 'react-native';

import * as types from '../constants/ActionTypes';
import { navigateReset } from './navigation';
import { setAuthToken } from './user';
import { fetchGraphQL } from '../utils/fetching';

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
    const { loginForm: {emailText, passwordText} } = getStore();
    const query = `
      query($email: Email!, $password: Password!) {
        payload: login(email: $email, password: $password) {
          authToken
        }
      }
    `;
    const variables = { email: emailText, password: passwordText };
    fetchGraphQL({query, variables}).then(({ error, data }) => {
      if (error) {
        dispatch(setLoading(false));
        Alert.alert(error._error, error.email || error.password || 'Unknown error');
      } else {
        dispatch(setAuthToken(data.payload.authToken));
        dispatch(resetLoadingForm());
        dispatch(navigateReset('Home'));
      }
    });
  }
}
