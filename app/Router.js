/* @flow */
'use strict';

import React, { TouchableOpacity, Navigator, StyleSheet } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import BackButton from './BackButton';
import SessionScreen from './SessionScreen';
import InfoScreen from './InfoScreen';
import SignUpScreen from './SignUpScreen';

import type * as ExRoute from '@exponent/react-native-navigator/ExRoute';

export default {
  session(): ExRoute {
    return {
      getSceneClass() {
        return SessionScreen;
      },
    };
  },

  getStartedFlow(): ExRoute {
    const _this = this;
    return {
      renderScene(navigator) {
        return (
          <ExNavigator
            navigator={navigator}
            showNavigationBar={false}
            initialRoute={_this.info()}
            sceneStyle={styles.sceneStyle}
          />
        );
      },
    };
  },

  info(): ExRoute {
    return {
      getSceneClass() {
        return InfoScreen;
      },
    };
  },

  signUpFlow(): ExRoute {
    const _this = this;
    return {
      renderScene(navigator) {
        return (
          <ExNavigator
            navigator={navigator}
            initialRoute={_this.signUp()}
            sceneStyle={styles.sceneStyle}
          />
        );
      },

      /*configureScene() {
        return { ...ExSceneConfigs.PushFromRight, gestures: null, };
      },*/
    };
  },

  signUp(): ExRoute {
    return {
      getSceneClass() {
        return SignUpScreen;
      },

      renderLeftButton(navigator) {
        return (
          <BackButton
            onPress={() => navigator.parentNavigator.pop()}
            style={navigator.props.barButtonIconStyle} />
        );
      },
    };
  },
};

const styles = StyleSheet.create({
  sceneStyle: {
    overflow: 'visible',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
});
