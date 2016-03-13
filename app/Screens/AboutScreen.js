/* @flow */
'use strict';

import React, {
  Component,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RightToLeftCard from '../Navigation/RightToLeftCard';
import Header from '../Components/Header';
import TextTableRow from '../Components/TextTableRow';
import Text from '../Components/Text';

class AboutScreen extends Component {
  render() {
    //TODO Set correct URL for Rogchap Software link
    return (
      <View style={styles.base}>
        <ScrollView style={styles.scroll}>
          <View style={[styles.section, styles.sectionTop]}>
            <TextTableRow top={true}>
              Libraries we use
            </TextTableRow>
            <TextTableRow onPress={() => this.props.onNavigate({ key: 'Terms' })}>
              Terms of service
            </TextTableRow>
            <TextTableRow  onPress={() => this.props.onNavigate({ key: 'Privacy' })}>
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
