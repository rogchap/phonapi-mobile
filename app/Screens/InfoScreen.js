/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Button from 'react-native-button';
import PageControl from 'react-native-page-control';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import StartButton from '../components/StartButton';
import TextButton from '../components/TextButton';
import Logo from '../components/Logo';
import { navigatePush } from '../actions/navigation';

const { width: pageWidth } = Dimensions.get('window');

class InfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
    };
  }

  render() {
    const { dispatch } = this.props;
    return (
      <Image source={require('../images/splash.png')} style={styles.bg}>
        <View style={styles.base}>
          <View style={styles.header}>
            <Logo />
          </View>
          <View style={styles.content}>
            <ScrollView
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              pagingEnabled={true}
              scrollEventThrottle={16}
              onScroll={this._onScrollViewScroll.bind(this)}>
              <View style={styles.page}>
                {/*Intentionally Blank*/}
              </View>
              <View style={styles.page}><Text>One</Text></View>
              <View style={styles.page}><Text>Two</Text></View>
              <View style={styles.page}><Text>Three</Text></View>
            </ScrollView>
            <PageControl style={{position:'absolute', left:0, right:0, bottom:30}}
              numberOfPages={4}
              currentPage={this.state.pageIndex}
              hidesForSinglePage={true}
              pageIndicatorTintColor="rgba(255,255,255,0.5)"
              currentPageIndicatorTintColor='white'
              indicatorStyle={{borderRadius: 5}}
              currentIndicatorStyle={{borderRadius: 5}}
              indicatorSize={{width:8, height:8}} />
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

  _onScrollViewScroll(event) {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.floor((offsetX - pageWidth * 0.5) / pageWidth) + 1;
    this.setState({ pageIndex });
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
  content: {
    flex: 3,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  page: {
    width: pageWidth,
    flex: 1,
    alignItems: 'center',
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

InfoScreen = RightToLeftCard.create(InfoScreen);
export default InfoScreen;
