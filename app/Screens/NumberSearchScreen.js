/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../components/RightToLeftCard';

class NumberSearchScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Number search screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

NumberSearchScreen = RightToLeftCard.create(NumberSearchScreen);
export default NumberSearchScreen;
