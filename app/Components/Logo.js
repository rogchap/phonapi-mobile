import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View {...this.props}>
        <View style={styles.base}>
          <Image source={require('../images/logo.png')} />
          <Text style={styles.text}>PHONAPI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    color: 'white',
    fontSize: 26,
    letterSpacing: 8,
    fontFamily: 'ProximaNova-Black'
  },
});

export default Logo;
