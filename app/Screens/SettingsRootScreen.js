/* @flow */
'use strict';

import React, {
  Component,
  View,
  ScrollView,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import RightToLeftCard from '../components/RightToLeftCard';
import Header from '../components/Header';
import TextTableRow from '../components/TextTableRow';
import Text from '../components/Text';
import { navigatePush, navigateReset } from '../actions/navigation';

const version = __DEV__ ?  DeviceInfo.getReadableVersion() : DeviceInfo.getVersion();

class SettingsRootScreen extends Component {
  render() {
    // TODO Set app id for appstore rating
    const appStoreId = 545174222;
    const { dispatch } = this.props;
    return (
      <View style={styles.base}>
        <ScrollView style={styles.scroll}>
          <View style={[styles.section, styles.sectionTop]}>
            <TextTableRow
              rightText="[User Name]"
              top={true}>
              Edit profile
            </TextTableRow>
            <TextTableRow>
              Office hours
            </TextTableRow>
          </View>
          <View style={styles.section}>
            <TextTableRow rightText="[Organisation Name]" top={true}>
              Edit organisation
            </TextTableRow>
            <TextTableRow>
              Phone numbers
            </TextTableRow>
            <TextTableRow>
              Team directory
            </TextTableRow>
            <TextTableRow rightText="[Current Plan]">
              Billing
            </TextTableRow>
          </View>
          <View style={styles.section}>
            <TextTableRow top={true}>
              Submit feedback
            </TextTableRow>
            <TextTableRow onPress={() => Linking.openURL(`itms-apps://itunes.apple.com/app/id${appStoreId}`)}>
              Rate Phonapi
            </TextTableRow>
          </View>
          <View style={[styles.section, styles.sectionBottom]}>
            <TextTableRow
              rightText={version}
              onPress={() => dispatch(navigatePush('About'))}
              top={true}>
              About
            </TextTableRow>
            <TextTableRow
              rightArrow={false}
              rightText="[Organisation Name]"
              onPress={this._signout.bind(this)}>
              <Text style={styles.redText}>Sign out</Text>
            </TextTableRow>
          </View>
        </ScrollView>
        <Header>Settings</Header>
      </View>
    );
  }

  _signout() {
    const { dispatch } = this.props;
    Alert.alert(
      'Sign out',
      'Are you sure you would like to sign out of [Organisation Name]?',
      [
        {text: 'Cancel', style:'cancel'},
        {text: 'OK', onPress:() => dispatch(navigateReset('Info'))}
      ]
    )
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    marginTop: 64,
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
  },
  sectionTop: {
    marginTop: 30,
  },
  sectionBottom: {
    marginBottom: 30,
  },
  redText: {
    color: '#FF5043',
  },
});

SettingsRootScreen = RightToLeftCard.create(SettingsRootScreen);
export default SettingsRootScreen;
