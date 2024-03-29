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

class ConfirmPayScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Confirm pay screen</Text>
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

ConfirmPayScreen = RightToLeftCard.create(ConfirmPayScreen);
export default ConfirmPayScreen;
