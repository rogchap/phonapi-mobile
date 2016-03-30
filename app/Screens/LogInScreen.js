/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import LoginFormContainer from '../containers/LoginFormContainer';
import RightToLeftCard from '../components/RightToLeftCard';
import CtaButton from '../components/CtaButton';
import TextInputField from '../components/TextInputField';
import Logo from '../components/Logo';

class LogInScreen extends Component {
  _formContainer: LoginFormContainer;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <Logo />
        </View>
        <View style={styles.form}>
          <LoginFormContainer ref={c => this._formContainer = c && c.getWrappedInstance()}/>
        </View>
        <View style={styles.cta}>
          <CtaButton onPress={this._onCtaButtonPress.bind(this)}>Sign in</CtaButton>
        </View>
        <KeyboardSpacer />
      </View>
    );
  }

  _blurInputs() {
    this._formContainer.blurInputs();
  }

  _onCtaButtonPress() {
    if(this._formContainer.validate()) {
      this._blurInputs();
      //this.props.onNavigate({ type: 'Reset', key: 'Home' });
    }
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
