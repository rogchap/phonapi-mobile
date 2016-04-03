/* @flow */
'use strict';

import React, {
  Component,
  View,
  ActivityIndicatorIOS,
  StyleSheet,
} from 'react-native';
import { VibrancyView } from 'react-native-blur';
import Animatable from 'react-native-animatable';

import Text from '../components/Text';

class Loading extends Component {
  render() {
    const { show, text } = this.props;
    if (!show) return null;

    return (
      <View style={styles.base}>
        <Animatable.View animation="zoomIn" style={styles.container}>
          <VibrancyView
            style={styles.bg}
            blurType="light">
            <Text style={styles.text}>{text || 'Loading...'}</Text>
            <ActivityIndicatorIOS
              style={styles.indicator}
              color="white"
              size="large"/>
          </VibrancyView>
        </Animatable.View>
      </View>
    );
  }
}

export default Loading;

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 150,
    height: 120,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
  },
});
