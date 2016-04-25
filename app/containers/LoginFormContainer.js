/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { changeInputText, changeInputErrors } from '../actions/loginForm';
import LoginForm from '../components/LoginForm';

class LoginFormContainer extends Component {

  _form: LoginForm;

  render() {
    return (
      <LoginForm
        ref={c => this._form = c}
        {...this.props} />
    );
  }

  blurInputs():void {
    this._form.blurInputs();
  }

  validate():boolean {
    return this._form.validate();
  }
}

function mapStateToProps(state) {
  const { loginForm } = state;
  return { ...loginForm };
}

export default connect(
  mapStateToProps,
  {changeInputErrors, changeInputText},
  null,
  {withRef: true})(LoginFormContainer);
