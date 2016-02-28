/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';

class CallLogScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
      <Text>Call log screen</Text>
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

CallLogScreen = RightToLeftCard.create(CallLogScreen);
export default CallLogScreen;
