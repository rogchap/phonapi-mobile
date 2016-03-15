/* @flow */
'use strict';

import React, {
  Component,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import Header from '../components/Header';
import TextTableRow from '../components/TextTableRow';
import Text from '../components/Text';
import { navigatePush } from '../actions/navigation';

class AboutScreen extends Component {
  render() {
    //TODO Set correct URL for Rogchap Software link
    const { dispatch } = this.props;
    return (
      <View style={styles.base}>
        <ScrollView style={styles.scroll}>
          <View style={[styles.section, styles.sectionTop]}>
            <TextTableRow top={true}>
              Libraries we use
            </TextTableRow>
            <TextTableRow onPress={() => dispatch(navigatePush('Terms'))}>
              Terms of service
            </TextTableRow>
            <TextTableRow  onPress={() => dispatch(navigatePush('Privacy'))}>
              Privacy policy
            </TextTableRow>
          </View>
        </ScrollView>
        <Text style={[styles.builtText, styles.text]}>
          a <Text style={[styles.text, styles.link]} onPress={()=>{}}>Rogchap Software</Text> product
        </Text>
        <Header>About</Header>
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
    marginTop: 15,
    marginBottom: 15,
  },
  sectionTop: {
    marginTop: 30,
  },
  sectionBottom: {
    marginBottom: 30,
  },
  builtText: {
    textAlign:'center',
    marginBottom: 10,
  },
  text: {
    color: 'rgba(255,255,255,0.50)',
    fontSize: 16,
  },
  link: {
    textDecorationLine: 'underline',
  }
});

AboutScreen = RightToLeftCard.create(AboutScreen);
export default AboutScreen;
