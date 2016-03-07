import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class CtaButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    onPress: React.PropTypes.func,
  };

  render() {
    const { style, onPress } = this.props;
    const children = typeof this.props.children === 'string'
      ? this.props.children.toUpperCase() : this.props.children;
    return (
      <TouchableOpacity style={[styles.base, style]} onPress={onPress}>
        <View style={styles.btn}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'stretch',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#4FCBE6',
    padding: 15,
  },
  text: {
    fontFamily: 'HelveticaNeue-Light',
    fontWeight: '200',
    fontSize: 24,
  }
});

export default CtaButton;
