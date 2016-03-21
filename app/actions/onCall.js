/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';

type Action = {
  type: string,
  mute?: boolean,
  speaker?: boolean,
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

export function setMute(mute:boolean): Action {
  return {
    type: types.MUTE_MICROPHONE,
    mute,
  };
}

export function enableSpeaker(speaker:boolean): Action {
  return {
    type: types.USE_LOUD_SPEAKER,
    speaker,
  };
}

export function showOnCallKeypad(show:boolean): Action {
  return {
    type: types.SHOW_ONCALL_KEYPAD,
    show,
  };
}
