/* @flow */
'use strict';

import React, {
  Component,
  View,Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { BlurView } from 'react-native-blur';

const { Picker: RNPicker } = React;

class Picker extends Component<any, any, any> {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.spring(
      this.state.position,
      { toValue: 1, friction: 12, tension: 100 }
    ).start();
  }

  render() {
    const { position } = this.state;
    const { onClose, ...other } = this.props;

    return (
      <View style={styles.base}>
        <TouchableWithoutFeedback onPress={this._beginClose.bind(this)}>
          <Animated.View
            style={[styles.overlay, {opacity: position.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
            })}]} />
      </TouchableWithoutFeedback>
        <Animated.View style={[styles.picker, {height: position.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [0, 0, 216],
        })}]} >
          <BlurView blurType="light">
            <RNPicker itemStyle={styles.item} {...other}>
              {this.props.children}
            </RNPicker>
          </BlurView>
        </Animated.View>
      </View>
    );
  }

  _beginClose() {
    Animated.spring(
      this.state.position,
      { toValue: 0, friction: 12, tension: 100 }
    ).start(() => this.props.onClose());
  }
}

Picker.defaultProps = {
  onClose: () => {},
}

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgb(0,0,0)',
    flex:1,
  },
  picker: {
    height: 0,
  },
  item: {
    fontFamily: "ProximaNova-Regular",
    color: 'white',
    fontSize:22,
  }
});

export default Picker;
