/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  NavigationExperimental,
  StatusBar,
} from 'react-native';
import invariant from 'invariant';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';

import * as callStates from '../constants/CallStates';
import OnCallContainer from '../containers/OnCallContainer';
import MenuPanel from '../components/MenuPanel';

//TODO: move to container components
import Screens from '../screens';

const {
  AnimatedView: NavigationAnimatedView,
} = NavigationExperimental;

class Phonapi extends Component {
  drawer: any;
  componentWillMount() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(false);
  }

  render() {
    const { navState, callState, dispatch } = this.props;
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
                onNavigate={()=>{}}
                renderScene={props => {
                  const key = props.scene.navigationState.key;
                  invariant(Screens[key],
                    `No Screen with key: ${key}. Have you defined it in Screens/index.js?`);
                  const Comp = Screens[key];
                  const sceneProps = { key, ...props, dispatch }
                  return <Comp {...sceneProps} />;
                }}
              />
          </Drawer>
          { callState !== callStates.IDLE ? <OnCallContainer /> : null }
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
  const { navigation, onCall } = state;

  return {
    navState: navigation,
    callState: onCall.callState,
  };
}

export default connect(mapStateToProps)(Phonapi);
