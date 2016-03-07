/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import CtaButton from '../Components/CtaButton';
import TextInputField from '../Components/TextInputField';

class SignUpScreen extends Component {
  _nameTextInputField;
  _emailTextInputField;
  _passwordTextInputField;

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image source={require('../images/logo.png')} />
            <Text style={styles.logoText}>P H O N A P I</Text>
          </View>
        </View>
        <View style={styles.form}>
          <TextInputField
            ref={c => this._nameTextInputField = c}
            label="Name"
            placeholder="eg. Sam Smith"
            autoCapitalize="words"
            iconSource={require('../images/name.png')} />
          <TextInputField
            ref={c => this._emailTextInputField = c}
            label="Email"
            placeholder="eg. sam.smith@mycompany.com"
            keyboardType="email-address"
            autoCapitalize="none"
            iconSource={require('../images/email.png')}  />
          <TextInputField
            ref={c => this._passwordTextInputField = c}
            label="Password"
            placeholder="enter a new password"
            secureTextEntry={true}
            iconSource={require('../images/lock.png')} />
        </View>
        <View style={styles.cta}>
          <CtaButton onPress={this._onCtaButtonPress.bind(this)}>Next</CtaButton>
        </View>
        <KeyboardSpacer />
      </View>
    );
  }

  _blurInputs() {
    this._nameTextInputField.blur();
    this._emailTextInputField.blur();
    this._passwordTextInputField.blur();
  }

  _onCtaButtonPress() {
    this._blurInputs();
    this.props.onNavigate({ key: 'Organisation' });
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  header: {
    flex: 2,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
  },
  logoText: {
    marginTop: 10,
    color: 'white',
    fontSize: 26,
    fontWeight: '800',
  },
  form: {
    flex: 3,
  },
  cta: {
    flex: 1,
    justifyContent: 'center',
  },
});

SignUpScreen = RightToLeftCard.create(SignUpScreen);
export default SignUpScreen;
