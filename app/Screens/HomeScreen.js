/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import MenuButton from '../Components/MenuButton';
import CtaButton from '../Components/CtaButton';

class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.base}>
        <Text>Home screen</Text>
        <CtaButton onPress={() => {this.props.onNavigate({ key: 'NumberSearch' })}}>
          Get a local number
        </CtaButton>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBtn: {
    position: 'absolute',
    left: 15,
    top: 30,
  }
});

HomeScreen.contextTypes = {
  drawer: React.PropTypes.object,
};

HomeScreen = RightToLeftCard.create(HomeScreen);
export default HomeScreen;
