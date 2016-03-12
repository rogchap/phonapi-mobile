/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import MenuButton from '../Components/MenuButton';
import CtaButton from '../Components/CtaButton';
import NumberPad from '../Components/NumberPad';
import CallButton from '../Components/CallButton';
import ImageButton from '../Components/ImageButton';
import DropdownButton from '../Components/DropdownButton';
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
        <MenuButton
          style={styles.menuBtn}
          onPress={() => this.context.drawer.toggle()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  menuBtn: {
    position: 'absolute',
    left: 15,
    top: 30,
  },
});

HomeScreen.contextTypes = {
  drawer: React.PropTypes.object,
};

HomeScreen = RightToLeftCard.create(HomeScreen);
export default HomeScreen;
