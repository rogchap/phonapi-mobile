/* @flow */
'use strict';

import React, {
  Component,
} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import Router from './Router';

export default class extends Component {
    render() {
      return (
        <ExNavigator
          initialRoute={Router.session()}
          showNavigationBar={false}
        />
      );
    }
}
