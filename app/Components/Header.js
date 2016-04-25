/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Text from './Text';

class Header extends Component {

  render() {
    let children;
    if (typeof this.props.children === 'string') {
      children =  <Text style={styles.text}>{this.props.children}</Text>
    } else {
      children = this.props.children;
    }

    return (
      <View style={styles.base}>
        {children}
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
