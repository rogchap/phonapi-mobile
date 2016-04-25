/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import TextInputField from './TextInputField';

class LoginForm extends Component {
  _emailTextInputField: TextInputField;
  _passwordTextInputField: TextInputField;

  render() {
    const { emailText, passwordText, emailValid, passwordValid, changeInputText } = this.props;

    return (
      <View>
        <TextInputField
          ref={c => this._emailTextInputField = c}
          label="Email"
          placeholder="eg. sam.smith@mycompany.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          error={!emailValid}
          validations={{isRequired: true, isEmail: true}}
          onChangeText={text => changeInputText('emailText', text)}
          value={emailText}
          iconSource={require('../images/email.png')}  />
        <TextInputField
          ref={c => this._passwordTextInputField = c}
          label="Password"
          placeholder="enter your password"
          secureTextEntry={true}
          error={!passwordValid}
          validations={{isRequired: true}}
          onChangeText={text => changeInputText('passwordText', text)}
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
    const { changeInputErrors } = this.props;

    const emailValid = this._emailTextInputField.validate();
    const passwordValid = this._passwordTextInputField.validate();
    changeInputErrors({
      emailValid,
      passwordValid,
    });
    return emailValid && passwordValid;
  }
}

export default LoginForm;
