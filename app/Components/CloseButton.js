import React, {
  Component,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class CloseButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    onPress: React.PropTypes.func,
  };

  render() {
    const { style, onPress } = this.props;

    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Image source={require('../images/close.png')} style={styles.img} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
    margin: 2,
  }
});

export default CloseButton;
