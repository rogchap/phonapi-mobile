/* @flow */
'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CtaButton from '../Components/CtaButton';
import RightToLeftCard from '../Navigation/RightToLeftCard';

class OrganisationScreen extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>Organisation screen</Text>
        <CtaButton onPress={() => this.props.onNavigate({key: 'Welcome'})}>NEXT</CtaButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

OrganisationScreen = RightToLeftCard.create(OrganisationScreen);
export default OrganisationScreen;
