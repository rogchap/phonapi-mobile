/* @flow */
'use strict';

import React, {
  AppRegistry,
} from 'react-native';
import App from './app/containers/App';

// TODO: This can be removed once all 3rd party components update to RN >=0.25.0
console.ignoredYellowBox = [
  'Warning: ReactNative.createElement',
  'Warning: ReactNative.Children',
  'Warning: ReactNative.isValidElement',
];

AppRegistry.registerComponent('Phonapi', () => App);
