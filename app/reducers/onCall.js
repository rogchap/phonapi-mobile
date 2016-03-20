/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';
import * as callStates from '../constants/CallStates';

type Action = {
  type?: string,
}

const initialState = {
  callState: callStates.IDLE,
  mute: false,
  speaker: false,
  showKeyboard: false,
}

export default function onCall(state:Object = initialState, action:Action = {}): Object {
  switch (action.type) {
    case types.INCOMING_CALL:
      return {
        ...state,
        callState: callStates.INCOMING,
      }
    case types.ACCEPT_INCOMING_CALL:
      return {
        ...state,
        callState: callStates.CONNECTING,
      }
    case types.DECLINE_INCOMING_CALL:
      return {
        ...state,
        callState: callStates.DECLINING,
      }
    case types.END_CALL:
      return {
        ...state,
        callState: callStates.ENDING,
      }
    case types.HIDE_CALL_DIALOG:
      return {
        ...state,
        callState: callStates.IDLE,
      }
    default:
      return state;
  }
}
