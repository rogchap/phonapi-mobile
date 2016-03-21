import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class NumberKey extends Component {
  render() {
    const { text, disabled, onPress, onLongPress } = this.props;

    return (
      <TouchableHighlight
        style={styles.onPress}
        underlayColor="rgba(255,255,255,0.5)"
        delayPressIn={0}
        onPressIn={disabled ? null : onPress}
        onLongPress={disabled ? null : onLongPress}>
        <View style={styles.base}>
          <Text style={styles.text}>{text}</Text>
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
  },
  text: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 22,
  }
});

export default NumberKey;
