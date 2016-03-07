import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';

class PlanScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Plan screen</Text>
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

PlanScreen = RightToLeftCard.create(PlanScreen);
export default PlanScreen;
