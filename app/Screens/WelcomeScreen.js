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

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Welcome screen</Text>
        <Button onPress={() => {this.props.onNavigate({ type: 'Reset', key: 'Home' })}}>Next</Button>
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

WelcomeScreen = RightToLeftCard.create(WelcomeScreen, { enableGestures:false, allowBack: false });
export default WelcomeScreen;
