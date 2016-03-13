import React, {
  Component,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class CallButton extends Component {
  static defaultProps = {
      tintColor: '#90E02A',
  };

  render() {
    const { tintColor } = this.props;
    return (
      <TouchableHighlight
        style={styles.onPress}
        underlayColor="rgba(0,0,0,0.5)"
        onPress={()=> {}}>
        <View style={styles.base}>
          <Image
            style={[styles.image, {tintColor}]}
            source={require('../images/call.png')}
            resizeMode="cover"/>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    width: 70,
    height: 70,
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onPress: {
    borderRadius: 45,
    width: 70,
    height: 70,
  },
  image: {
    borderRadius: 35,
  }
});

export default CallButton;
