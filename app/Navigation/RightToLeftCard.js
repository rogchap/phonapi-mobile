/* @flow */
'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Animated,
  Platform,
  PanResponder,
  NavigationExperimental,
} from 'react-native';
import BackButton from './BackButton';

const {
  Container: NavigationContainer,
  RootContainer : NavigationRootContainer,
 } = NavigationExperimental;


const ENABLE_GESTURES = Platform.OS !== 'android';

import type {
  NavigationParentState
} from 'NavigationStateUtils';

type Layout = {
  initWidth: number,
  initHeight: number,
  width: Animated.Value;
  height: Animated.Value;
};

type Props = {
  navigationState: NavigationParentState;
  index: number;
  position: Animated.Value;
  layout: Layout;
  onNavigate: Function;
  enableGestures: bool;
  children: Object;
};

class Card extends Component {
  _responder: ?Object;
  _lastHeight: number;
  _lastWidth: number;
  _widthListener: string;
  _heightListener: string;
  props: Props;
  componentWillMount() {
    if (ENABLE_GESTURES && this.props.enableGestures) {
      this._enableGestures();
    }
  }
  _enableGestures() {
    this._responder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, {dx, dy, moveX, moveY, x0, y0}) => {
        if (this.props.navigationState.index === 0) {
          return false;
        }
        if (moveX > 30) {
          return false;
        }
        if (dx > 5 && Math.abs(dy) < 4) {
          return true;
        }
        return false;
      },
      onPanResponderGrant: (e, {dx, dy, moveX, moveY, x0, y0}) => {
      },
      onPanResponderMove: (e, {dx}) => {
        const a = (-dx / this._lastWidth) + this.props.navigationState.index;
        this.props.position.setValue(a);
      },
      onPanResponderRelease: (e, {vx, dx}) => {
        const xRatio = dx / this._lastWidth;
        const doesPop = (xRatio + vx) > 0.45;
        if (doesPop) {
          // todo: add an action which accepts velocity of the pop action/gesture, which is caught and used by NavigationAnimatedView
          this.props.onNavigate(NavigationRootContainer.getBackAction());
          return;
        }
        Animated.spring(this.props.position, {
          toValue: this.props.navigationState.index,
        }).start();
      },
      onPanResponderTerminate: (e, {vx, dx}) => {
        Animated.spring(this.props.position, {
          toValue: this.props.navigationState.index,
        }).start();
      },
    });
  }
  componentDidMount() {
    this._lastHeight = this.props.layout.initHeight;
    this._lastWidth = this.props.layout.initWidth;
    this._widthListener = this.props.layout.width.addListener(({value}) => {
      this._lastWidth = value;
    });
    this._heightListener = this.props.layout.height.addListener(({value}) => {
      this._lastHeight = value;
    });
    // todo: fix listener and last layout dimentsions when props change. potential bugs here
  }
  componentWillUnmount() {
    this.props.layout.width.removeListener(this._widthListener);
    this.props.layout.height.removeListener(this._heightListener);
  }
  render() {
    const cardPosition = Animated.add(this.props.position, new Animated.Value(-this.props.index));
    const gestureValue = Animated.multiply(cardPosition, this.props.layout.width);
    const touchResponderHandlers = this._responder ? this._responder.panHandlers : null;

    let backButton = null;
    if(this.props.index > 0 && this.props.allowBack) {
      backButton = (
        <BackButton
          style={styles.back}
          onPress={this._onBackButtonPress.bind(this)} />
      );
    }

    return (
      <Animated.View
        {...touchResponderHandlers}
        style={[
          styles.card,
          {
            /*right: gestureValue.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [-1, 0, 0.2],
            }),
            left: gestureValue.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, -1],
            }),*/
            transform: [
              {
                translateX: gestureValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -1],
                }),
              },
            ],
          }
        ]}>
        {this.props.children}
        {backButton}
      </Animated.View>
    );
  }

  _onBackButtonPress() {
    this.props.onNavigate({type: 'BackAction'});
  }
}
Card.defaultProps = {
  enableGestures: true,
  allowBack: true,
}
Card = NavigationContainer.create(Card);

function createRightToLeftCard(Comp: Component, cardProps: Object = {}): Component {
  class RightToLeftCard extends Component {
    render() {
      const { navigationState, index, position, layout, ...other } = this.props;
      return (
        <Card
          navigationState={navigationState}
          index={index}
          position={position}
          layout={layout} {...cardProps} >
          <Comp {...other} />
        </Card>
      );
    }
  }
  RightToLeftCard = NavigationContainer.create(RightToLeftCard);
  return RightToLeftCard;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    /*shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,*/
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  back: {
    position: 'absolute',
    top: 25,
    left: 15,
  }
});

export default { Card, create: createRightToLeftCard };
