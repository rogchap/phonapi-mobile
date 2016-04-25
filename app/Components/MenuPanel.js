/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Button from 'react-native-button';
import CloseButton from './CloseButton';
import { navigatePush, navigateReset } from '../actions/navigation';

class MenuPanel extends Component {
  render() {
    const { onNavigate } = this.props;
    return (
      <BlurView blurType="dark" style={styles.base}>
        <View style={styles.spacer}></View>
        <View style={styles.container}>
          <Button
            style={styles.item}
            onPress={() => { onNavigate(navigateReset('Home')); }}>
            Keypad
          </Button>
          <Button
            style={styles.item}
            onPress={() => { onNavigate(navigateReset('CallLog')); }}>
            Call log
          </Button>
          <Button
            style={styles.item}
            onPress={() => { onNavigate(navigatePush('SettingsRoot')); }}>
            Settings
          </Button>
          {__DEV__ ? <Button onPress={() => AsyncStorage.clear()}>dev: Clear state store</Button> : null}
        </View>
        <View style={styles.spacer}></View>
        <CloseButton
          style={styles.closeBtn}
          onPress={() => this.context.drawer.close()} />
      </BlurView>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'column',
  },
  closeBtn: {
    position: 'absolute',
    top: 30,
    right: 15,
  },
  container: {
    flex: 2,
    justifyContent: 'space-around',
  },
  spacer: {
    flex: 1,
  },
  item: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'ProximaNova-Light',
    fontWeight: 'normal',
  }
});

MenuPanel.contextTypes = {
  drawer: React.PropTypes.object,
};


export default MenuPanel;
