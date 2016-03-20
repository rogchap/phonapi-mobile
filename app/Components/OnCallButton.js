/* @flow */
'use strict';

import React, {
  Component,
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import CallButton from './CallButton';

class OnCallButton extends Component {
  _tintColor: string;
  _baseStyle: Object;

  constructor(props:any) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
    }
  }

  componentWillMount() {
    const { type } = this.props;
    if (type === OnCallButton.ACCEPT) {
      this.state.position.setValue(1);
    }
  }

  componentWillUpdate(nextProps:any) {
    if (nextProps.type !== this.props.type) {
      this.changeToType(nextProps.type);
    }
  }

  render(): ReactElement {

    const { position } = this.state;
    const { initialType, ...callButtonProps } = this.props;

    const tintColor = position.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 80, 67)', 'rgb(144, 224, 42)'],
    });
    const rotation = position.interpolate({
      inputRange: [0, 1],
      outputRange: ['135deg', '0deg'],
    });

    return (
      <Animated.View style={{transform: [{ rotateZ: rotation}]}}>
        <CallButton {...callButtonProps} tintColor={tintColor} />
      </Animated.View>
    )
  }

  changeToType(type:string) {
    const toValue = type === OnCallButton.ACCEPT ? 1 : 0;
    Animated.timing(
      this.state.position,
      { toValue }
    ).start();
  }
}

OnCallButton.ACCEPT = 'accept';
OnCallButton.DECLINE = 'decline';

OnCallButton.propTypes = {
  type: React.PropTypes.oneOf([OnCallButton.ACCEPT, OnCallButton.DECLINE]),
};

OnCallButton.defaultProps = {
  type: OnCallButton.ACCEPT,
}

export default OnCallButton;
