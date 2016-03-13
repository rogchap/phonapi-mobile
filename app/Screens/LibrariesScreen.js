/* @flow */
'use strict';

import React, {
  Component,
  View,
  WebView,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import Header from '../Components/Header';

class LibrariesScreen extends Component {
  render() {
    //TODO Set correct URL for libraries
    return (
      <View style={styles.base}>
        <WebView
          style={styles.web}
          source={{uri: 'https://www.google.com.au/intl/en/policies/privacy/'}} />
        <Header>Libraries we use</Header>
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

LibrariesScreen = RightToLeftCard.create(LibrariesScreen);
export default LibrariesScreen;
