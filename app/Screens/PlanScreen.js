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

class PlanScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Plan screen</Text>
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

PlanScreen = RightToLeftCard.create(PlanScreen);
export default PlanScreen;
