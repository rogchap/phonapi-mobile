/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Text from './Text';

class DropdownButton extends Component {

  render() {
    const { onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.base}>
          <View>
            <Text>{this.props.children}</Text>
          </View>
          <Image
            style={styles.image}
            source={require('../images/down.png')} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  image: {
    marginBottom: 6,
    marginLeft: 5,
  },
});

export default DropdownButton;
