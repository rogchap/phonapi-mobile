/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  SegmentedControlIOS,
} from 'react-native';
import RightToLeftCard from '../components/RightToLeftCard';
import MenuButton from '../components/MenuButton';
import Header from '../components/Header';

class CallLogScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Call log screen</Text>
        <Header>
          <View style={styles.segment}>
            <SegmentedControlIOS
              tintColor="rgba(255,255,255,1)"
              values={['All', 'Missed']}
              selectedIndex={0} />
          </View>
        </Header>
        <MenuButton />
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
  segment: {
    width: 150,
  }
});

CallLogScreen = RightToLeftCard.create(CallLogScreen);
export default CallLogScreen;
