/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import RightToLeftCard from '../components/RightToLeftCard';
import MenuButton from '../components/MenuButton';
import NoNumberView from '../components/NoNumberView';
import NumberPadView from '../components/NumberPadView';

class HomeScreen extends Component {

  render() {
    //TODO render based on status
    let view;
    if (true) {
      view = <NumberPadView />
    } else {
      view = <NoNumberView onPress={() => this.props.onNavigate({ key: 'NumberSearch' })} />
    }


    return (
      <View style={styles.base}>
        {view}
        <MenuButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});

HomeScreen = RightToLeftCard.create(HomeScreen);
export default HomeScreen;
