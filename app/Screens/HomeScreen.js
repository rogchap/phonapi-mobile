/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import RightToLeftCard from '../components/RightToLeftCard';
import MenuButton from '../components/MenuButton';
import NoNumberView from '../containers/NoNumberView';
import NumberPadView from '../containers/NumberPadView';

class HomeScreen extends Component {

  render() {
    //TODO render based on status
    let view;
    if (true) {
      view = <NumberPadView />
    } else {
      view = <NoNumberView />
    }


    return (
      <View style={styles.base}>
        {view}
        <MenuButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});

HomeScreen = RightToLeftCard.create(HomeScreen);
export default HomeScreen;
