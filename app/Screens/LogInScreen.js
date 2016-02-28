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

class LogInScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Button onPress={() => this.props.onNavigate({ type: 'BackAction' })}>Back</Button>
        <Text>Log in screen</Text>
        <Button onPress={() => this.props.onNavigate({ type: 'Reset', key: 'Home' })}>Next</Button>
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

LogInScreen = RightToLeftCard.create(LogInScreen);
export default LogInScreen;
