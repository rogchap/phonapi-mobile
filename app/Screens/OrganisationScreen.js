/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import RightToLeftCard from '../components/RightToLeftCard';
import CtaButton from '../components/CtaButton';
import Logo from '../components/Logo';
import TextInputField from '../components/TextInputField';
import Hairline from '../components/Hairline';
import { navigatePush } from '../actions/navigation';

class OrganisationScreen extends Component {
  _organisationTextInputField;
  _joinCodeTextInputField;

  render() {
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <Logo />
        </View>
        <View style={styles.form}>
          <TextInputField
            ref={c => this._organisationTextInputField = c}
            label="Create a new organisation"
            placeholder="eg. My Company Inc."
            autoCapitalize="words"
            hairline={false}
            iconSource={require('../images/name.png')} />
          <View style={styles.orView}>
            <View style={styles.hairlineView}><Hairline /></View>
            <View><Text style={styles.orText}>OR</Text></View>
            <View style={styles.hairlineView}><Hairline /></View>
          </View>
          <TextInputField
            ref={c => this._joinCodeTextInputField = c}
            label="Join an existing organisation"
            placeholder="enter invite code"
            autoCapitalize="none"
            hairline={false}
            iconSource={require('../images/name.png')} />
          <Text style={styles.instructionText}>
            Don’t have an invite code?{'\n'}
            Get your organisation owner to send you an invite.
          </Text>
        </View>
        <View style={styles.cta}>
          <CtaButton onPress={this._onCtaButtonPress.bind(this)}>Next</CtaButton>
        </View>
        <KeyboardSpacer />
      </View>
    );
  }

  _blurInputs() {
    this._organisationTextInputField.blur();
    this._joinCodeTextInputField.blur();
  }

  _onCtaButtonPress() {
    this._blurInputs();
    this.props.dispatch(navigatePush('Welcome'));
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
  orView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  orText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'ProximaNova-Regular',
    letterSpacing: 1.3,
  },
  instructionText: {
    color: 'rgba(255,255,255,0.4)',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 12,
    marginLeft: 80,
    marginRight: 30,
  },
  hairlineView: {
    flex: 1,
  },
});

OrganisationScreen = RightToLeftCard.create(OrganisationScreen);
export default OrganisationScreen;
