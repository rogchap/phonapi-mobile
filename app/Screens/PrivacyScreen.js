/* @flow */
'use strict';

import React, {
  Component,
  View,
  WebView,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../components/RightToLeftCard';
import Header from '../components/Header';

class PrivacyScreen extends Component {
  render() {
    //TODO Set correct URL for privacy policy
    return (
      <View style={styles.base}>
        <WebView
          style={styles.web}
          source={{uri: 'https://www.google.com.au/intl/en/policies/privacy/'}} />
        <Header>Privacy policy</Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  web: {
    flex: 1,
    marginTop: 64,
  },
});

PrivacyScreen = RightToLeftCard.create(PrivacyScreen);
export default PrivacyScreen;
