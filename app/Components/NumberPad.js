import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';
import NumberKey from './NumberKey';

class NumberPad extends Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.row}>
          <NumberKey text="1" />
          <NumberKey text="2" />
          <NumberKey text="3" />
        </View>
        <View style={styles.row}>
          <NumberKey text="4" />
          <NumberKey text="5" />
          <NumberKey text="6" />
        </View>
        <View style={styles.row}>
          <NumberKey text="7" />
          <NumberKey text="8" />
          <NumberKey text="9" />
        </View>
        <View style={styles.row}>
          <NumberKey text="*" />
          <NumberKey text="0" />
          <NumberKey text="#" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default NumberPad;
