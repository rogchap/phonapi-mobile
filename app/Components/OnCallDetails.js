/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import Text from './Text';
import * as callStates from '../constants/CallStates';

class OnCallDetails extends Component {
  render() {
    const { callState } = this.props;
    const disabled = callState === callStates.DECLINING || callState === callStates.ENDING;

    return (
      <View style={disabled && styles.disabled}>
        <Text style={styles.caller}>+61 420 616 054</Text>
        <Text>calling Sydney Office...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  caller: {
    fontSize: 35,
  },
  disabled: {
    opacity: 0.5,
  }
});

export default OnCallDetails;
