/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Platform,
  PanResponder,
  Dimensions,
  NavigationExperimental,
} from 'react-native';
import BackButton from './BackButton';
import { navigateBack } from '../actions/navigation';

const {
  Container: NavigationContainer,
  RootContainer : NavigationRootContainer,
 } = NavigationExperimental;

const { width } = Dimensions.get('window');

const ENABLE_GESTURES = Platform.OS !== 'android';

type Layout = {
  initWidth: number,
  initHeight: number,
  width: Animated.Value;
  height: Animated.Value;
};

class Card extends Component {
  _responder: ?Object;
  _lastWidth: number;
  _widthListener: string;

  componentWillMount() {
    if (ENABLE_GESTURES && this.props.enableGestures) {
      this._enableGestures();
    }
  }

  _enableGestures() {
    const { dispatch } = this.props;
    this._responder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, {dx, dy, moveX, moveY, x0, y0}) => {
        if (this.props.scene.index === 0) {
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
        const a = (-dx / this._lastWidth) + this.props.scene.index;
        this.props.position.setValue(a);
      },
      onPanResponderRelease: (e, {vx, dx}) => {
        const xRatio = dx / this._lastWidth;
        const doesPop = (xRatio + vx) > 0.45;
        if (doesPop) {
          dispatch(navigateBack());
          return;
        }
        Animated.spring(this.props.position, {
          toValue: this.props.scene.index,
        }).start();
      },
      onPanResponderTerminate: (e, {vx, dx}) => {
        Animated.spring(this.props.position, {
          toValue: this.props.scene.index,
        }).start();
      },
    });
  }

  static defaultProps = {
    enableGestures: true,
    allowBack: true,
  };

  componentDidMount() {
    this._lastWidth = this.props.layout.initWidth;
    this._widthListener = this.props.layout.width.addListener(({value}) => {
      this._lastWidth = value;
    });
  }

  componentWillUnmount() {
    this.props.layout.width.removeListener(this._widthListener);
  }


  render():ReactElement {
    const { layout, position, scene, allowBack } = this.props;
    const index = scene.index;
    const inputRange = [index - 1, index, index + 1];
    const touchResponderHandlers = this._responder ? this._responder.panHandlers : null;

    let backButton = null;
    if(index > 0 && this.props.allowBack) {
      backButton = (
        <BackButton
          style={styles.back}
          onPress={this._onBackButtonPress.bind(this)} />
      );
    }
    //TODO: Reimplement gesture for back
    return (
      <Animated.View {...touchResponderHandlers}
        style={[
          styles.card,
          {
            transform: [
              {
                translateX: position.interpolate({
                  inputRange,
                  outputRange: [width, 0, -width],
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

function createRightToLeftCard(Comp: any, cardProps: Object = {}): any {
  class RightToLeftCard extends Component {
    render() {
      const { dispatch, scene, position, layout, ...other } = this.props;
      return (
        <Card
          dispatch={dispatch}
          scene={scene}
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
