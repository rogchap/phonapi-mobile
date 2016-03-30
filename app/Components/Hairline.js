import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Hairline extends Component {
  static propTypes = {
    clearColor: React.PropTypes.string,
    color: React.PropTypes.string,
  }

  static defaultProps = {
    clearColor: 'rgba(255,255,255,0.0)',
    color: 'rgba(255,255,255,0.25)',
  }

  render() {
    const { clearColor, color, style } = this.props;
    return (
      <LinearGradient
        style={[styles.base, style]}
        start={[0.0, 0.5]} end={[1.0, 0.5]}
        colors={[clearColor, color, color, clearColor]}
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
