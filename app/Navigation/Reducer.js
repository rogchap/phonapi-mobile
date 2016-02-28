/* @flow */
'use strict';

import { NavigationExperimental } from 'react-native';

const { StateUtils: NavigationStateUtils } = NavigationExperimental

import type {
  NavigationState,
  NavigationParentState,
  NavigationReducer,
} from 'NavigationStateUtils';

import type {
  BackAction,
} from 'NavigationRootContainer';

export type NavigationStackReducerAction = BackAction | {
  type: string,
};

export type ReducerForStateHandler = (state: NavigationState) => NavigationReducer;

export type PushedReducerForActionHandler = (action: any) => ?NavigationReducer;

export type StackReducerConfig = {
  /*
   * The initialState is that the reducer will use when there is no previous state.
   * Must be a NavigationParentState:
   *
   * {
   *   children: [
   *     {key: 'subState0'},
   *     {key: 'subState1'},
   *   ],
   *   index: 0,
   *   key: 'navStackKey'
   * }
   */
  initialState: /* NavigationParentState */any;

  /*
   * Returns the sub-reducer for a particular state to handle. This will be called
   * when we need to handle an action on a sub-state. If no reducer is returned,
   * no action will be taken
   */
  getReducerForState?: ReducerForStateHandler;

  /*
   * Returns a sub-reducer that will be used when pushing a new route. If a reducer
   * is returned, it be called to get the new state that will be pushed
   */
  getPushedReducerForAction: PushedReducerForActionHandler;
};

const defaultGetReducerForState = (initialState) => (state) => state || initialState;

function NavigationStackReducer({initialState, getReducerForState, getPushedReducerForAction}: StackReducerConfig): NavigationReducer {
  const getReducerForStateWithDefault = getReducerForState || defaultGetReducerForState;
  return function (lastState: ?NavigationState, action: any): NavigationState {
    if (!lastState) {
      return initialState;
    }
    const lastParentState = NavigationStateUtils.getParent(lastState);
    if (!lastParentState) {
      return lastState;
    }
    switch (action.type) {
      case 'Reset':
        return NavigationStateUtils.reset(lastState, [{ key: action.key }], 0);
      case 'BackAction':
        if (lastParentState.index === 0 || lastParentState.children.length === 1) {
          return lastParentState;
        }
        return NavigationStateUtils.pop(lastParentState);
    }

    const activeSubState = lastParentState.children[lastParentState.index];
    const activeSubReducer = getReducerForStateWithDefault(activeSubState);
    const nextActiveState = activeSubReducer(activeSubState, action);
    if (nextActiveState !== activeSubState) {
      const nextChildren = [...lastParentState.children];
      nextChildren[lastParentState.index] = nextActiveState;
      return {
        ...lastParentState,
        children: nextChildren,
      };
    }

    const subReducerToPush = getPushedReducerForAction(action);
    if (subReducerToPush) {
      return NavigationStateUtils.push(
        lastParentState,
        subReducerToPush(null, action)
      );
    }
    return lastParentState;
  };
}

module.exports = NavigationStackReducer;
