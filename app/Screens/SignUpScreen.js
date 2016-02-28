/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import RightToLeftCard from '../Navigation/RightToLeftCard';

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Button onPress={() => this.props.onNavigate({ type: 'BackAction' })}>Back</Button>
        <Text>Sign up screen</Text>
        <Button onPress={() => this.props.onNavigate({ key: 'Organisation' })}>Next</Button>
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

SignUpScreen = RightToLeftCard.create(SignUpScreen);
export default SignUpScreen;
