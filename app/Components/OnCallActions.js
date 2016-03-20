/* @flow */
'use strict';

import React, {
  Component,
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import SwitchButton from './SwitchButton';
import ImageButton from './ImageButton';
import Text from './Text';
import * as callStates from '../constants/CallStates';

class OnCallActions extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      position: new Animated.Value(1),
    }
  }

  componentWillMount() {
    if (this.props.callState == callStates.INCOMING) {
      this.state.position.setValue(0);
    }
  }

  componentWillUpdate(nextProps:any) {
    if (this.props.callState === callStates.INCOMING
      && nextProps.callState !== callStates.INCOMING
      && nextProps.callState !== callStates.DECLINING) {
      Animated.timing(
        this.state.position,
        { toValue: 1 }
      ).start();
    }
  }

  render():ReactElement {
    const { callState } = this.props;
    const disabled = callState === callStates.DECLINING || callState === callStates.ENDING
    return (
      <Animated.View style={[styles.base, {opacity: this.state.position}]}>
        <View style={styles.group}>
          <SwitchButton
            disabled={disabled}
            offImageSrc={require('../images/mute.png')}
            onImageSrc={require('../images/mute_on.png')} />
          <Text style={[styles.text, disabled && styles.disabled]}>MUTE</Text>
        </View>
        <View style={styles.group}>
          <ImageButton
            disabled={disabled}
            source={require('../images/keypad.png')} />
          <Text style={[styles.text, disabled && styles.disabled]}>KEYPAD</Text>
        </View>
        <View style={styles.group}>
          <SwitchButton
            disabled={disabled}
            offImageSrc={require('../images/speaker.png')}
            onImageSrc={require('../images/speaker_on.png')} />
          <Text style={[styles.text, disabled && styles.disabled]}>SPEAKER</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  group: {
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
  },
  disabled: {
    opacity: 0.25,
  },
});

export default OnCallActions;
