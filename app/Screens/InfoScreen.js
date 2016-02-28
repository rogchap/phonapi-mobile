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

class InfoScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Info screen</Text>
        <Button
          onPress={() => { this.props.onNavigate({ key: 'SignUp' }); }}>
          Get Started
        </Button>
        <Button
          onPress={() => { this.props.onNavigate({ key: 'LogIn' }); }}>
          Log in
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

InfoScreen = RightToLeftCard.create(InfoScreen);
export default InfoScreen;
