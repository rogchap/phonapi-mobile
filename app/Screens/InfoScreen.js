/* @flow */
'use strict';

import React, {
  Component,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import RightToLeftCard from '../components/RightToLeftCard';
import StartButton from '../components/StartButton';
import TextButton from '../components/TextButton';
import Logo from '../components/Logo';
import Text from '../components/Text';
import InfoPagerContainer from '../containers/InfoPagerContainer';

import { navigatePush } from '../actions/navigation';

class InfoScreen extends Component {

  componentWillUpdate(nextProps:any) {
    if ((nextProps.pageIndex === 1 || nextProps.pageIndex === 0)
      && nextProps.pageIndex !== this.props.pageIndex) {
        LayoutAnimation.easeInEaseOut();
      }
  }

  render() {
    const { dispatch, pageIndex } = this.props;

    return (
      <Image source={require('../images/splash.png')} style={styles.bg}>
        <View style={styles.base}>
          <View style={[styles.header, pageIndex > 0 && styles.headerLessTop]}>
            <Logo />
          </View>
          <View style={styles.content}>
            <InfoPagerContainer />
          </View>
          <View style={styles.footer}>
            <StartButton
              onPress={() => { dispatch(navigatePush('SignUp')) }}>
              Get Started
            </StartButton>
            <TextButton
              style={styles.loginBtn}
              textStyle={styles.loginBtnText}
              onPress={() => { dispatch(navigatePush('LogIn')) }}>
              Already have an account?
            </TextButton>
          </View>

        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: Image.resizeMode.cover,
    width: null,
    height: null,
  },
  base: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
  },
  headerLessTop: {
    top: 50,
  },
  content: {
    flex: 3,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginBtn: {
    marginTop: 30,
    marginBottom: 30,
  },
  loginBtnText: {
    color: 'rgba(255,255,255,0.7)',
  },
});

function mapStateToProps(state) {
  const { info } = state;

  return {
    pageIndex: info.pageIndex,
  };
}

InfoScreen = RightToLeftCard.create(InfoScreen);

export default connect(mapStateToProps)(InfoScreen);
