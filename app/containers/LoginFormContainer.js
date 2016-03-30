/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { changeInputText, changeInputErrors } from '../actions/loginForm';
import LoginForm from '../components/LoginForm';

class LoginFormContainer extends Component {

  _form: LoginForm;

  render() {
    const { dispatch, ...formProps } = this.props;
    return (
      <LoginForm
        ref={c => this._form = c}
        onValidateInputs={ (nextState: Object) => dispatch(changeInputErrors(nextState))}
        onChangeText={(key: string, value: string) => dispatch(changeInputText(key, value))}
        {...formProps} />
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

export default connect(mapStateToProps, null, null, {withRef: true})(LoginFormContainer);
