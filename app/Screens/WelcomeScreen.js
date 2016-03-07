/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CtaButton from '../Components/CtaButton';
import RightToLeftCard from '../Navigation/RightToLeftCard';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Welcome screen</Text>
        <CtaButton onPress={() => {this.props.onNavigate({ type: 'Reset', key: 'Home' })}}>
          Done
        </CtaButton>
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
