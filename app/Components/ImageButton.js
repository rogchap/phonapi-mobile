/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class ImageButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    onPress: React.PropTypes.func,
    onLongPress: React.PropTypes.func,
    source: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    disabled: React.PropTypes.bool,
  };

  render() {
    const { style, disabled, source, onPress, onLongPress } = this.props;

    return (
      <TouchableOpacity
        style={style}
        activeOpacity={disabled ? 1 : 0.2}
        onPress={disabled ? null : onPress}
        onLongPress={disabled ? null : onLongPress}>
        <Image source={source} style={disabled && styles.disabled} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.25,
  },
});

export default ImageButton;
