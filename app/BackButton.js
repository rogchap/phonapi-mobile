/* @flow */
'use strict';

import React, {
  Component,
  TouchableOpacity,
  PropTypes,
  View } from 'react-native';
import ExNavigatorStyles from '@exponent/react-native-navigator/ExNavigatorStyles';
import { BackIcon } from '@exponent/react-native-navigator/ExNavigatorIcons';

class BackButton extends Component {
  render() {
    let { style, onPress } = this.props;
    return (
      <TouchableOpacity
        pressRetentionOffset={ExNavigatorStyles.barButtonPressRetentionOffset}
        onPress={onPress}
        style={ExNavigatorStyles.barBackButton}>
        <BackIcon
            style={[
              ExNavigatorStyles.barButtonIcon,
              style,
            ]}/>
      </TouchableOpacity>
    );
  }
}

BackButton.propTypes = {
  style: View.propTypes.style,
  onPress: PropTypes.func,
};

BackButton.defaultProps = {
  onPress: () => {},

  style: {},
};

export default BackButton;
