/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';

import TextInputField from './TextInputField';

class LoginForm extends Component {
  _emailTextInputField: TextInputField;
  _passwordTextInputField: TextInputField;

  render() {
    const { emailText, passwordText, emailValid, passwordValid, onChangeText } = this.props;

    return (
      <View>
        <TextInputField
          ref={c => this._emailTextInputField = c}
          label="Email"
          placeholder="eg. sam.smith@mycompany.com"
          keyboardType="email-address"
          autoCapitalize="none"
          error={!emailValid}
          validations={{isRequired: true, isEmail: true}}
          onChangeText={text => onChangeText('emailText', text)}
          value={emailText}
          iconSource={require('../images/email.png')}  />
        <TextInputField
          ref={c => this._passwordTextInputField = c}
          label="Password"
          placeholder="enter your password"
          secureTextEntry={true}
          error={!passwordValid}
          validations={{isRequired: true}}
          onChangeText={text => onChangeText('passwordText', text)}
          value={passwordText}
          iconSource={require('../images/lock.png')} />
      </View>
    );
  }

  blurInputs(): void {
    this._emailTextInputField.blur();
    this._passwordTextInputField.blur();
  }

  validate(): boolean {
    const { onValidateInputs } = this.props;

    const emailValid = this._emailTextInputField.validate();
    const passwordValid = this._passwordTextInputField.validate();
    onValidateInputs({
      emailValid,
      passwordValid,
    });
    return emailValid && passwordValid;
  }
}

export default LoginForm;
