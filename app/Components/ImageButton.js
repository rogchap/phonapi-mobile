/* @flow */
'use strict';

import React, {
  Component,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class ImageButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    onPress: React.PropTypes.func,
    source: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    disabled: React.PropTypes.bool,
  };

  render() {
    const { style, disabled, source, onPress } = this.props;

    return (
      <TouchableOpacity style={style} onPress={disabled ? null : onPress}>
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
