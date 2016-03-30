import React, {
  Component,
  PropTypes,
  StyleSheet,
  View,
  Image,
  TextInput,
} from 'react-native';
import Animatable from 'react-native-animatable';

import Hairline from './Hairline';
import Text from './Text';

import * as validators from '../helpers/validators';

class TextInputField extends Component {
  _field: ReactElement;

  static propTypes = {
    ...TextInput.propTypes,
    label: PropTypes.string,
    error: PropTypes.bool,
    validations: PropTypes.object,
  };

  static defaultProps = {
    label: '',
    hairline: true,
  };

  componentDidUpdate(prevProps) {
    if(this.props.error && !prevProps.error) {
      this._field.shake();
    }
  }

  render() {
    const { label, iconSource, hairline, error, ...other } = this.props;

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
          <Animatable.View
            style={styles.field}
            ref={c => this._field = c}>
            <Text style={[styles.label, error && styles.labelWhenError]}>
              {label.toUpperCase()}
            </Text>
            <TextInput
              ref={c => this._textInput = c}
              style={styles.input}
              placeholderTextColor="rgba(255,255,255,0.5)"
              selectionColor="#4FCBE6"
              {...other} />
          </Animatable.View>
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

  validate() {
    let isValid = true;
    const { validations } = this.props;
    if ( !validations ||  Object.keys(validations).length === 0) return isValid;

    Object.keys(validations).forEach(rule => {
      if(!validators[rule](this.props.value, validations[rule])) {
        isValid = false;
      }
    });
    return isValid;
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
    fontSize: 12,
    letterSpacing: 1.3,
  },
  labelWhenError: {
    color: 'rgb(255, 80, 67)',
  },
  input: {
    color: 'white',
    height: 30,
    fontSize: 18,
    fontFamily: 'ProximaNova-Regular',
  }
});

export default TextInputField;
