/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type: string,
};

export function dealWithIncomingCall(): Action {
  return {
    type: types.INCOMING_CALL,
  };
}

export function declineCall(): Action {
  return {
    type: types.DECLINE_INCOMING_CALL,
  };
}

export function acceptCall(): Action {
  return {
    type: types.ACCEPT_INCOMING_CALL,
  };
}

export function endCall(): Action {
  return {
    type: types.END_CALL,
  };
}

export function closeCallDialog(): Action {
  return {
    type: types.HIDE_CALL_DIALOG,
  };
}
