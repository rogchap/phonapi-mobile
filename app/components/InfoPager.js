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
} from 'react-native';
import PageControl from 'react-native-page-control';

import Text from './Text';

const { width: pageWidth } = Dimensions.get('window');

declare function requestAnimationFrame(next:Function) : void;

class InfoPager extends Component {
  state: any;
  _timer: number;
  _scrollView: ScrollView;

  constructor(props:any) {
    super(props);
    this.state = {
      position: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this._timer = setTimeout(() => this._animateArrow(), 2000);
    requestAnimationFrame(() => {
      this._scrollView.scrollTo({ x:this.props.pageIndex * pageWidth, y:0, animated: false });
    });
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    const { pageIndex } = this.props;

    const arrowMargin = this.state.position.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: [0, 30, 0],
    });

    return (
      <View style={styles.base}>
        <ScrollView
          ref={c => this._scrollView = c}
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
          currentPage={pageIndex}
          hidesForSinglePage={true}
          pageIndicatorTintColor="rgba(255,255,255,0.5)"
          currentPageIndicatorTintColor='white'
          indicatorStyle={{borderRadius: 5}}
          currentIndicatorStyle={{borderRadius: 5}}
          indicatorSize={{width:8, height:8}} />
      </View>
    );
  }

  _onScrollViewScroll(event:any) {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.floor((offsetX - pageWidth * 0.5) / pageWidth) + 1;
    if (pageIndex !== this.props.pageIndex) {
      this.props.changePageIndex(pageIndex);
    }
  }

  _animateArrow() {
    Animated.sequence([
      Animated.spring(this.state.position, {toValue: 0, tension: 20}),
      Animated.spring(this.state.position, {toValue: 1, tension: 5}),
    ]).start(() => {
      this._timer = setTimeout(() => this._animateArrow(), 5000);
    })
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
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
});

export default InfoPager;
