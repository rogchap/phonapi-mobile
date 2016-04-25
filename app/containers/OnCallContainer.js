/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  Image,
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import OnCallButtons from '../components/OnCallButtons';
import OnCallActions from '../components/OnCallActions';
import OnCallDetails from '../components/OnCallDetails';
import {
  declineCall,
  closeCallDialog,
  acceptCall,
  endCall,
  setMute,
  enableSpeaker,
  showOnCallKeypad,
} from '../actions/onCall';
import * as callStates from '../constants/CallStates';

class OnCallContainer extends Component {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.position,
      { toValue: 1, duration: 250 }
    ).start();
  }

  componentDidUpdate() {
    const { callState, dispatch } = this.props;
    if (callState === callStates.DECLINING || callState === callStates.ENDING) {
      Animated.timing(
        this.state.position,
        { toValue: 0, duration: 250, delay: 800 }
      ).start(() => {
        dispatch(closeCallDialog())
      });
    }
  }

  render(): ReactElement {
    const { position } = this.state;
    const { callState, mute, speaker, showKeypad, dispatch } = this.props;
    return (
      <Animated.View style={[styles.base, {opacity: position}]}>
        <Image source={require('../images/bg.png')} style={styles.bg}>
          <View style={styles.content}>
            <View style={styles.details}>
              <OnCallDetails
                callState={callState} />
            </View>
            <View style={styles.actions}>
              <OnCallActions
                callState={callState}
                mute={mute}
                speaker={speaker}
                showKeypad={showKeypad}
                onMutePress={() => dispatch(setMute(!mute))}
                onSpeakerPress={() => dispatch(enableSpeaker(!speaker))}
                onKeyPadPress={() => dispatch(showOnCallKeypad(true))}
                onKeyPadClosePress={() => dispatch(showOnCallKeypad(false))} />
            </View>
            <View style={styles.callButtons}>
              <OnCallButtons
                callState={callState}
                onAccept={() => dispatch(acceptCall())}
                onDecline={() => dispatch(declineCall())}
                onEnd={() => dispatch(endCall())} />
            </View>
          </View>
        </Image>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  bg: {
    flex: 1,
    resizeMode: Image.resizeMode.cover,
    width: null,
    height: null,
  },
  content: {
    paddingTop: 20,
    backgroundColor: 'transparent',
    flex: 1,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  actions: {
    flex: 2.5,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  callButtons: {
    flex: 1,
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  const { onCall } = state;
  return { ...onCall };
}

export default connect(mapStateToProps)(OnCallContainer);
