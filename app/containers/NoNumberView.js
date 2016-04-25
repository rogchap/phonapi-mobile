/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

import CtaButton from '../components/CtaButton';
import Text from '../components/Text';

class NoNumberView extends Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.content}>
          <Text style={styles.text}>First things first...</Text>
          <Text style={styles.text}>Lets get you a new</Text>
          <Text style={styles.text}>phone number</Text>
        </View>
        <View style={styles.cta}>
          <CtaButton>
            Get a local number
          </CtaButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  content: {
    flex: 5,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cta: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default NoNumberView;
