/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import Router from './Router';

export default class extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Button
          onPress={() => { this.props.navigator.push(Router.signUpFlow()); }}>
          Get Started
        </Button>
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
