import React, {
  Component,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class MenuButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    onPress: React.PropTypes.func,
  };

  render() {
    const { style, onPress } = this.props;

    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Image source={require('../images/menu.png')} style={styles.img} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 22,
    height: 17,
    marginTop: 3,
    marginBottom: 3,
  }
});

export default MenuButton;
