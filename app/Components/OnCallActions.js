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
import NumberPad from './NumberPad';
import TextButton from './TextButton';
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
    const { callState, mute, speaker, showKeypad,
      onMutePress, onSpeakerPress, onKeyPadPress, onKeyPadClosePress } = this.props;
    const disabled = callState === callStates.DECLINING || callState === callStates.ENDING;
    return (
      <Animated.View style={[styles.base, {opacity: this.state.position}]}>
        {!showKeypad ?
          <View style={styles.actions}>
            <View style={styles.group}>
              <SwitchButton
                disabled={disabled}
                on={mute}
                onPress={onMutePress}
                offImageSrc={require('../images/mute.png')}
                onImageSrc={require('../images/mute_on.png')} />
              <Text style={[styles.text, disabled && styles.disabled]}>MUTE</Text>
            </View>
            <View style={styles.group}>
              <ImageButton
                disabled={disabled}
                onPress={onKeyPadPress}
                source={require('../images/keypad.png')} />
              <Text style={[styles.text, disabled && styles.disabled]}>KEYPAD</Text>
            </View>
            <View style={styles.group}>
              <SwitchButton
                disabled={disabled}
                on={speaker}
                onPress={onSpeakerPress}
                offImageSrc={require('../images/speaker.png')}
                onImageSrc={require('../images/speaker_on.png')} />
              <Text style={[styles.text, disabled && styles.disabled]}>SPEAKER</Text>
            </View>
          </View> : null}
        {showKeypad ?
          <View style={[styles.numberPad, disabled && styles.disabled]}>
            <NumberPad />
            <View style={styles.closeBtn}>
              <TextButton onPress={onKeyPadClosePress}>close</TextButton>
            </View>

          </View> : null}

      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  group: {
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
  disabled: {
    opacity: 0.25,
  },
  numberPad: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
  closeBtn: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

export default OnCallActions;
