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
import { navigateBack } from '../actions/navigation';

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
  navState: NavigationParentState;
  index: number;
  position: Animated.Value;
  layout: Layout;
  enableGestures: bool;
  children: Object;
  dispatch: Function;
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
    const { dispatch } = this.props;
    this._responder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, {dx, dy, moveX, moveY, x0, y0}) => {
        if (this.props.navState.index === 0) {
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
        const a = (-dx / this._lastWidth) + this.props.navState.index;
        this.props.position.setValue(a);
      },
      onPanResponderRelease: (e, {vx, dx}) => {
        const xRatio = dx / this._lastWidth;
        const doesPop = (xRatio + vx) > 0.45;
        if (doesPop) {
          // todo: add an action which accepts velocity of the pop action/gesture, which is caught and used by NavigationAnimatedView
          dispatch(navigateBack());
          return;
        }
        Animated.spring(this.props.position, {
          toValue: this.props.navState.index,
        }).start();
      },
      onPanResponderTerminate: (e, {vx, dx}) => {
        Animated.spring(this.props.position, {
          toValue: this.props.navState.index,
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
  render():Object {
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
    this.props.dispatch(navigateBack());
  }
}
Card.defaultProps = {
  enableGestures: true,
  allowBack: true,
}

function createRightToLeftCard(Comp: Component, cardProps: Object = {}): Component {
  class RightToLeftCard extends Component {
    render() {
      console.log('RightToLeftCard Props:', this.props);
      const { navState, dispatch, index, position, layout, ...other } = this.props;
      return (
        <Card
          dispatch={dispatch}
          navState={navState}
          index={index}
          position={position}
          layout={layout} {...cardProps} >
          <Comp dispatch={dispatch} {...other} />
        </Card>
      );
    }
  }
  return RightToLeftCard;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
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
