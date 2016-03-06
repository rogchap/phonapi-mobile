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

class MenuPanel extends Component {
  render() {
    return (
      <BlurView blurType="dark" style={styles.base}>
        <Text>Menu Panel</Text>
          <Button
            onPress={() => { this.props.onNavigate({ type: 'Reset', key: 'Home' }); }}>
            Phone Keypad
          </Button>
          <Button
            onPress={() => { this.props.onNavigate({ type: 'Reset', key: 'CallLog' }); }}>
            CallLog
          </Button>
          <Button
            onPress={() => { this.props.onNavigate({ key: 'SettingsRoot' }); }}>
            Settings
          </Button>
      </BlurView>
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

export default MenuPanel;
