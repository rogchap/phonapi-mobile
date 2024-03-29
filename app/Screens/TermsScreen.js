/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../components/RightToLeftCard';
import Header from '../components/Header';

class TermsScreen extends Component {
  render() {
    //TODO Set correct URL for terms of service
    return (
      <View style={styles.base}>
        <WebView
          style={styles.web}
          source={{uri: 'https://www.google.com.au/intl/en/policies/terms/'}} />
        <Header>Terms of service</Header>
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

TermsScreen = RightToLeftCard.create(TermsScreen);
export default TermsScreen;
