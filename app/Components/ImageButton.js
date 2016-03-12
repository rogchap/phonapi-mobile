import React, {
  Component,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class ImageButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    onPress: React.PropTypes.func,
    source: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  };

  render() {
    const { style, source, onPress } = this.props;

    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Image source={source} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});

export default ImageButton;
