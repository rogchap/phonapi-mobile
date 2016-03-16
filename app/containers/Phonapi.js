/* @flow */
'use strict';

import React, {
  Component,
  StyleSheet,
  View,
  Image,
  NavigationExperimental,
  StatusBar,
} from 'react-native';
import invariant from 'invariant';
import {connect} from 'react-redux';
import Drawer from 'react-native-drawer';

import MenuPanel from '../components/MenuPanel';

//TODO: move to container components
import Screens from '../screens';

const {
  AnimatedView: NavigationAnimatedView,
} = NavigationExperimental;

class Phonapi extends Component {

  componentWillMount() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);
  }

  render() {
    const { navState, dispatch } = this.props;
    const currentKey = navState.children[navState.index].key;
    return (
      <Image source={require('../images/bg.png')} style={styles.bg}>
        <View style={{ flex:1 }}>
          <Drawer
            type="overlay"
            ref={drawer => this.drawer = drawer}
            content={<MenuPanel onNavigate={action => { this.drawer.close(); dispatch(action); }} />}
            negotiatePan={true}
            panCloseMask={45}
            panOpenMask={45}
            captureGestures={false}
            disabled={this._drawerIsDisabled(currentKey)}
            onOpenStart={this._drawerOnOpen.bind(this)}
            onClose={this._drawerOnClose.bind(this)}>
              <NavigationAnimatedView
                key={navState.children[0].key + '_flow'}
                style={{ flex: 1 }}
                navigationState={navState}
                renderScene={(child, index, position, layout) => {
                  invariant(Screens[child.key],
                    `No Screen with key: ${child.key}. Have you defined it in Screens/index.js?`);
                  const Comp = Screens[child.key];
                  const props = { key:child.key, navState, index, position, layout, dispatch }
                  return <Comp {...props} />;
                }}
              />
          </Drawer>
        </View>
      </Image>
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
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: Image.resizeMode.cover,
    width: null,
    height: null,
  }
});

function mapStateToProps(state) {
  const { navigation } = state;

  return {
    navState: navigation
  };
}

export default connect(mapStateToProps)(Phonapi);
