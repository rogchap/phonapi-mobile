/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CtaButton from '../components/CtaButton';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import { navigateReset } from '../actions/navigation';

class WelcomeScreen extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <View style={styles.base}>
        <View style={styles.content}>
          <Text style={styles.text}>Woohoo!</Text>
          <Text style={styles.text}>[Organisation Name]</Text>
          <Text style={styles.text}>is ready to start using Phonapi</Text>
        </View>
        <View style={styles.cta}>
          <CtaButton onPress={() => {dispatch(navigateReset('Home'))}}>
            Done
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
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  cta: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 34,
    textAlign: 'center',
  },
});

WelcomeScreen = RightToLeftCard.create(WelcomeScreen, { enableGestures:false, allowBack: false });
export default WelcomeScreen;
