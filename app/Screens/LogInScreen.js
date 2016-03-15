/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import CtaButton from '../components/CtaButton';
import TextInputField from '../components/TextInputField';
import Logo from '../components/Logo';

class LogInScreen extends Component {
  _emailTextInputField;
  _passwordTextInputField;

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <Logo />
        </View>
        <View style={styles.form}>
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
            placeholder="enter your password"
            secureTextEntry={true}
            iconSource={require('../images/lock.png')} />
        </View>
        <View style={styles.cta}>
          <CtaButton onPress={this._onCtaButtonPress.bind(this)}>Sign in</CtaButton>
        </View>
        <KeyboardSpacer />
      </View>
    );
  }

  _blurInputs() {
    this._emailTextInputField.blur();
    this._passwordTextInputField.blur();
  }

  _onCtaButtonPress() {
    this._blurInputs();
    this.props.onNavigate({ type: 'Reset', key: 'Home' });
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  header: {
    flex: 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 3,
  },
  cta: {
    flex: 1,
    justifyContent: 'center',
  },
});

LogInScreen = RightToLeftCard.create(LogInScreen);
export default LogInScreen;
