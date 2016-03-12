/* @flow */
'use strict';

import React, {
  Component,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import Header from '../Components/Header';
import TextTableRow from '../Components/TextTableRow';

const version = __DEV__ ?  DeviceInfo.getReadableVersion() : DeviceInfo.getVersion();

class SettingsRootScreen extends Component {
  render() {
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
            <TextTableRow>
              Rate Phonapi
            </TextTableRow>
          </View>
          <View style={[styles.section, styles.sectionBottom]}>
            <TextTableRow
              rightText={version}
              top={true}>
              About
            </TextTableRow>
            <TextTableRow
              rightArrow={false}
              rightText="[Organisation Name]"
              onPress={() => this.props.onNavigate({ type: 'Reset', key: 'Info' })}>
              Sign out
            </TextTableRow>
          </View>
        </ScrollView>
        <Header>Settings</Header>
      </View>
    );
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
    marginTop: 10,
    marginBottom: 10,
  },
  sectionTop: {
    marginTop: 20,
  },
  sectionBottom: {
    marginBottom: 20,
  },
});

SettingsRootScreen = RightToLeftCard.create(SettingsRootScreen);
export default SettingsRootScreen;
