/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import OnCallButton from './OnCallButton';
import * as callStates from '../constants/CallStates';

class OnCallButtons extends Component {
  _mainCallButton: OnCallButton;

  componentWillMount() {
    LayoutAnimation.easeInEaseOut(); 
  }

  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    const { onDecline, callState } = this.props;
    const disabled = callState === callStates.DECLINING || callState === callStates.ENDING
    const showDecline = callState === callStates.INCOMING || callState === callStates.DECLINING
    const mainType = !showDecline ? OnCallButton.DECLINE : OnCallButton.ACCEPT;

    return (
      <View style={styles.base}>
        {showDecline ?
          <OnCallButton
          type={OnCallButton.DECLINE}
          onPress={onDecline}
          disabled={disabled} /> : null}
        <OnCallButton
          type={mainType}
          disabled={disabled}
          onPress={this._onAcceptOrEnd.bind(this)} />
      </View>
    );
  }

  _onAcceptOrEnd() {
    const { onAccept, onEnd, callState } = this.props;
    if (callState === callStates.INCOMING) {
      onAccept();
    } else {
      onEnd();
    }
  }
}

OnCallButtons.propTypes = {
  onDecline: React.PropTypes.func.isRequired,
  onAccept: React.PropTypes.func.isRequired,
  onEnd: React.PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default OnCallButtons;
