/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import MenuButton from '../Components/MenuButton';
import NoNumberView from '../Components/NoNumberView';
import NumberPadView from '../Components/NumberPadView';

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
