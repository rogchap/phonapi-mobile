import React, {
  Component,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class DropdownButton extends Component {

  render() {
    const { onPress } = this.props;

    return (
      <TouchableOpacity onPress={()=> {}}>
        <View style={styles.base}>
          <View>
            <Text style={styles.text}>{this.props.children}</Text>
          </View>
          <Image
            style={styles.image}
            source={require('../images/down.png')} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  image: {
    marginBottom: 4,
    marginLeft: 5,
  },
  text: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
  },
});

export default DropdownButton;
