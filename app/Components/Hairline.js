import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Hairline extends Component {
  render() {
    return (
      <LinearGradient
        style={styles.base}
        start={[0.0, 0.5]} end={[1.0, 0.5]}
        colors={['rgba(255,255,255,0.0)', 'rgba(255,255,255,0.25)', 'rgba(255,255,255,0.25)', 'rgba(255,255,255,0.0)']}
        locations={[0,0.2,0.8,1]}
        shouldRasterizeIOS={true} />
    );
  }
}

const styles = StyleSheet.create({
  base: {
    height: 1,
    alignSelf: 'stretch',
  },
});

export default Hairline;
