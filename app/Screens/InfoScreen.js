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
import Button from 'react-native-button';
import PageControl from 'react-native-page-control';
import RightToLeftCard from '../components/RightToLeftCard';
import StartButton from '../components/StartButton';
import TextButton from '../components/TextButton';
import Logo from '../components/Logo';
import Text from '../components/Text';
import { navigatePush } from '../actions/navigation';

const { width: pageWidth } = Dimensions.get('window');

class InfoScreen extends Component {
  state: any;
  _timer: number;

  constructor(props) {
    super(props);

    //TODO Should pageIndex be in Redux?
    this.state = {
      pageIndex: 0,
      position: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this._timer = setTimeout(() => this._animateArrow(), 2000);
  }

  componentWillUpdate(nextProps, nextState) {
    if ((nextState.pageIndex === 1 || nextState.pageIndex === 0)
      && nextState.pageIndex !== this.state.pageIndex) {
        LayoutAnimation.easeInEaseOut();
      }
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    const { dispatch } = this.props;
    const { pageIndex, position } = this.state;

    const arrowMargin = position.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: [0, 30, 0],
    })

    return (
      <Image source={require('../images/splash.png')} style={styles.bg}>
        <View style={styles.base}>
          <View style={[styles.header, pageIndex > 0 && styles.headerLessTop]}>
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
              <View style={[styles.page, styles.pageOne]}>
                <Animated.Image
                  style={{marginRight: arrowMargin}}
                  source={require('../images/right.png')} />
              </View>
              <View style={styles.page}>
                <Text style={styles.pageText}>Purchase local phone numbers{'\n'}in over 40 countries</Text>
                <Image source={require('../images/world_flags.png')} />
              </View>
              <View style={styles.page}>
                <Text style={styles.pageText}>Make and receive calls{'\n'}to and from all over the world</Text>
                <Image source={require('../images/world_calls.png')} />
              </View>
              <View style={styles.page}>
                <Text style={styles.pageText}>Calls can be answered and made{'\n'}by anyone in your team</Text>
                <Image source={require('../images/team_calls.png')} />
              </View>
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

  _animateArrow() {
    Animated.sequence([
      Animated.spring(this.state.position, {toValue: 0, tension: 20}),
      Animated.spring(this.state.position, {toValue: 1, tension: 5}),
    ]).start(() => {
      this._timer = setTimeout(() => this._animateArrow(), 5000);
    })
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
  headerLessTop: {
    top: 50,
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
    justifyContent: 'space-between',
    paddingTop: 100,
  },
  pageOne: {
    alignItems: 'flex-end',
    paddingRight: 30,
  },
  pageText: {
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 40,
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
