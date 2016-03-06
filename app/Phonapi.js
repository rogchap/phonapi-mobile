/* @flow */
'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  NavigationExperimental,
  StatusBar,
} from 'react-native';
import invariant from 'invariant';
import Drawer from 'react-native-drawer';
import Reducer from './Navigation/Reducer';
import Screens from './Screens';
import MenuPanel from './Components/MenuPanel';

const {
  RootContainer,
  AnimatedView: NavigationAnimatedView,
  Header: NavigationHeader
} = NavigationExperimental;

import type {
  NavigationState,
  NavigationParentState
} from 'NavigationStateUtils';

type Layout = {
  initWidth: number,
  initHeight: number,
  width: Animated.Value;
  height: Animated.Value;
};

const NavigationReducer = Reducer({
  getPushedReducerForAction: (action) => {
    /*if (action.type === 'push') {*/
      return (state) => state || { key: action.key };
    /*}
    return null;*/
  },
  getReducerForState: (initialState) => (state) => state || initialState,
  initialState: {
    index: 0,
    children: [
      { key: 'Info' },
    ],
  },
});

export default class Phonapi extends Component {

  componentWillMount() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <Image source={require('./images/bg.png')} style={styles.bg}>
        <RootContainer
          reducer={NavigationReducer}
          persistenceKey="NavigationState"
          renderNavigation={this.renderApp.bind(this)}
        />
    </Image>
    );
  }
  renderApp(navigationState: any, onNavigate: Function) {
    if (!navigationState) {
      return null;
    }

    const currentKey = navigationState.children[navigationState.index].key;
    return (
      <View style={{flex:1}}>
        <Drawer
          type="overlay"
          ref={drawer => this.drawer = drawer}
          content={<MenuPanel onNavigate={action => {this.drawer.close(); onNavigate(action)}} />}
          disabled={this._drawerIsDisabled(currentKey)}
          onOpenStart={this._drawerOnOpen.bind(this)}
          onClose={this._drawerOnClose.bind(this)}>
            <NavigationAnimatedView
              key={navigationState.children[0].key + '_flow'}
              style={{ flex: 1 }}
              navigationState={navigationState}
              renderOverlay={(position, layout) => this._renderOverlay(navigationState, position, layout)}
              renderScene={(child, index, position, layout) => {
                invariant(Screens[child.key],
                  `No Screen with key: ${child.key}. Have you defined it in Screens/index.js?`);
                const Comp = Screens[child.key];
                const props = { key:child.key, navigationState, child, index, position, layout }
                return <Comp {...props} />;
              }}
            />
        </Drawer>
      </View>
    );
  }

  _drawerIsDisabled(key: string): boolean {
    return key !== 'Home'
        && key !== 'CallLog';
  }

  _drawerOnOpen():void {
    StatusBar.setHidden(true, 'slide');
  }
  _drawerOnClose():void {
    StatusBar.setHidden(false, 'slide');
  }

  _renderOverlay(navigationState:NavigationParentState, position: Animated.Value, layout: Layout): ?Component {
    const index = navigationState.index;
    const currentKey = navigationState.children[index].key;
    const isSetting = /^Settings/.test(currentKey);
    if (isSetting) {
      return (
        <NavigationHeader
          navigationState={navigationState}
          position={position}
          layout={layout}
          getTitle={state => state.key === 'Home' ? '' : state.key}
        />
      )

    }
    return null;
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: Image.resizeMode.cover,
  }
});
