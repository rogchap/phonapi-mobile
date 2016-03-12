import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CtaButton from './CtaButton';

class NoNumberView extends Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.content}>
          <Text style={styles.text}>First things first...</Text>
          <Text style={styles.text}>Lets get you a new</Text>
          <Text style={styles.text}>phone number</Text>
        </View>
        <View style={styles.cta}>
          <CtaButton onPress={this.props.onPress}>
            Get a local number
          </CtaButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  content: {
    flex: 5,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cta: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default NoNumberView;
