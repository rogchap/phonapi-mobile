/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text as RNText,
} from 'react-native';

class Text extends Component {
  render() {
    const { style, ...other } = this.props;
    return (
      <RNText style={[styles.base, style]} {...other} />
    );
  }
}

const styles = StyleSheet.create({
  base: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 20,
  },
});

export default Text;
