import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';

class NumberSearchScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Number search screen</Text>
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
});

NumberSearchScreen = RightToLeftCard.create(NumberSearchScreen);
export default NumberSearchScreen;
