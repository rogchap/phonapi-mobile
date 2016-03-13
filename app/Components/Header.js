/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';
import Text from './Text';

class Header extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingTop: 20,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Header;
