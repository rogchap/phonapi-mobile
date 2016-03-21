/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';
import * as callStates from '../constants/CallStates';

type Action = {
  type?: string,
  mute?: boolean,
  speaker?: boolean,
  show?: boolean,
}

const initialState = {
  callState: callStates.IDLE,
  mute: false,
  speaker: false,
  showKeypad: false,
}

export default function onCall(state:Object = initialState, action:Action = {}): Object {
  switch (action.type) {
    case types.INCOMING_CALL:
      return {
        ...state,
        callState: callStates.INCOMING,
        mute: false,
        speaker: false,
        showKeypad: false,
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
    case types.MUTE_MICROPHONE:
      return {
        ...state,
        mute: action.mute,
      }
    case types.USE_LOUD_SPEAKER:
      return {
        ...state,
        speaker: action.speaker,
      }
    case types.SHOW_ONCALL_KEYPAD:
      return {
        ...state,
        showKeypad: action.show,
      }
    default:
      return state;
  }
}
