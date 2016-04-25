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

class StartButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    onPress: React.PropTypes.func,
  };

  render() {
    const { style, onPress } = this.props;
    const children = typeof this.props.children === 'string'
      ? this.props.children.toUpperCase() : this.props.children;
    return (
      <TouchableOpacity style={[styles.base, style]} onPress={onPress}>
        <View style={styles.btn}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  base: {

  },
  btn: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 20,
    color: 'white',
    letterSpacing: 5,
  }
});

export default StartButton;
