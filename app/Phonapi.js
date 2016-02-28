/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  NavigationExperimental,
} from 'react-native';
import invariant from 'invariant';
import Drawer from 'react-native-drawer';
import Reducer from './Navigation/Reducer';
import Screens from './Screens';
import MenuPanel from './Components/MenuPanel';

const {
  RootContainer,
  AnimatedView: NavigationAnimatedView,
} = NavigationExperimental;

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
  render() {
    return (
      <RootContainer
        reducer={NavigationReducer}
        persistenceKey="NavigationState"
        renderNavigation={this.renderApp.bind(this)}
      />
    );
  }
  renderApp(navigationState: any, onNavigate: Function) {
    if (!navigationState) {
      return null;
    }

    const currentKey = navigationState.children[navigationState.index].key;
    return (
      <Drawer
        type="static"
        ref={drawer => this.drawer = drawer}
        content={<MenuPanel onNavigate={action => {this.drawer.close(); onNavigate(action)}} />}
        openDrawerOffset={100}
        tapToClose={true}
        disabled={this._drawerIsDisabled(currentKey)}
        styles={{main: {shadowColor: "#000000", shadowOpacity: 0.4, shadowRadius: 3}}} >
          <NavigationAnimatedView
            key={navigationState.children[0].key + '_flow'}
            style={{ flex: 1 }}
            navigationState={navigationState}
            renderScene={(child, index, position, layout) => {
              invariant(Screens[child.key],
                `No Screen with key: ${child.key}. Have you defined it in Screens/index.js?`);
              const Comp = Screens[child.key];
              const props = { key:child.key, navigationState, child, index, position, layout }
              return <Comp {...props} />;
            }}
          />
      </Drawer>

    )
  }

  _drawerIsDisabled(key: string): boolean {
    return key !== 'Home'
        && key !== 'CallLog';
  }
}
