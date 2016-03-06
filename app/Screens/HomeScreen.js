/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Home screen</Text>
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

HomeScreen = RightToLeftCard.create(HomeScreen);
export default HomeScreen;
