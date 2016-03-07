/* @flow */
'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { BlurView } from 'react-native-blur';
import Button from 'react-native-button';
import CloseButton from './CloseButton';

class MenuPanel extends Component {
  render() {
    return (
      <BlurView blurType="dark" style={styles.base}>
        <View style={styles.spacer}></View>
        <View style={styles.container}>
          <Button
            style={styles.item}
            onPress={() => { this.props.onNavigate({ type: 'Reset', key: 'Home' }); }}>
            Keypad
          </Button>
          <Button
            style={styles.item}
            onPress={() => { this.props.onNavigate({ type: 'Reset', key: 'CallLog' }); }}>
            Call log
          </Button>
          <Button
            style={styles.item}
            onPress={() => { this.props.onNavigate({ key: 'SettingsRoot' }); }}>
            Settings
          </Button>
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
