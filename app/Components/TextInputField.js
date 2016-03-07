import React, {
  Component,
  PropTypes,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import Hairline from './Hairline';

class TextInputField extends Component {

  static propTypes = {
    ...TextInput.propTypes,
    label: PropTypes.string,
  };

  static defaultProps = {
    label: '',
    hairline: true,
  };

  render() {

    const { label, iconSource, hairline, ...other } = this.props;

    let hairlineView;
    if (hairline) {
      hairlineView = (
        <View>
          <Hairline />
        </View>
      );
    }

    return (
      <View style={styles.base}>
        <View style={styles.fields}>
          <View style={styles.icon}>
            <Image source={iconSource} />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>{label.toUpperCase()}</Text>
            <TextInput
              ref={c => this._textInput = c}
              style={styles.input}
              placeholderTextColor="rgba(255,255,255,0.5)"
              selectionColor="#4FCBE6"
              {...other} />
          </View>
        </View>
        {hairlineView}
      </View>
    );
  }

  focus() {
    this._textInput.focus();
  }

  blur() {
    this._textInput.blur();
  }
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  fields: {
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
  },
  field: {
    marginLeft: 30,
    marginBottom: 5,
    flex: 1,
  },
  icon: {
    width: 20,
  },
  label: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'ProximaNova-Regular',
    letterSpacing: 1.3,
  },
  input: {
    color: 'white',
    height: 30,
    fontSize: 18,
    fontFamily: 'ProximaNova-Regular',
  }
});

export default TextInputField;
