/* @flow */
'use strict';

import React, {
  Component,
  PropTypes,
} from 'react-native';
import Router from './Router';

export default class SessionScreen extends Component {
  componentWillMount() {
    let { navigator } = this.props;

    // TODO: Check if user session and display correct Screen
    navigator.replace(Router.getStartedFlow());
  }

  render():?Object {
    return null;
  }
}

SessionScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};
