/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class TextButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    textStyle: Text.propTypes.style,
    onPress: React.PropTypes.func,
  };

  render() {
    const { style, textStyle, onPress } = this.props;
    const children = typeof this.props.children === 'string'
      ? this.props.children.toUpperCase() : this.props.children;
    return (
      <TouchableOpacity style={[styles.base, style]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ProximaNova-Regular',
    color: 'white',
    letterSpacing: 1.5,
  }
});

export default TextButton;
