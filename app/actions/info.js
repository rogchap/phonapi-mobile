/* @flow */
'use strict';

import * as types from '../constants/ActionTypes';
import { navigateReset } from './navigation';

type Action = {
  type: string,
  index: number,
};

export function changePageIndex(index: number): Action {
  return {
    type: types.SET_INFO_PAGE_INDEX,
    index,
  };
};
