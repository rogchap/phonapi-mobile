/* @flow */
'use strict';

import React, {
  Component,
  StyleSheet,
} from 'react-native';

const { Text: RNText } = React;

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
  },
});

export default Text;
