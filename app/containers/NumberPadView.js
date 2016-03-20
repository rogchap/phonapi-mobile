/* @flow */

import React, {
  Component,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';

import DropdownButton from '../components/DropdownButton';
import NumberPad from '../components/NumberPad';
import ImageButton from '../components/ImageButton';
import CallButton from '../components/CallButton';
import Text from '../components/Text';
import DialCodePicker from '../components/DialCodePicker';
import CountryList from '../constants/CountryList';
import { shouldShowDialCodePicker, changeCountryCode } from '../actions/callPad';
import { dealWithIncomingCall } from '../actions/onCall';

const { width: pageWidth } = Dimensions.get('window');

class NumberPadView extends Component {

  render() {
    const { countryCode, showDialCodePicker, dispatch } = this.props;
    const country = CountryList.find(c => c.code == countryCode);
    return (
     <View style={styles.base}>
       <View style={styles.input}>
         <View>
           <DropdownButton
             onPress={() => dispatch(shouldShowDialCodePicker(true))}>
             {country.dialCode}
           </DropdownButton>
           <View style={styles.inputLine}>
             <Text
               style={styles.inputText}
               numberOfLines={1}>
               0420 616 054
             </Text>
             <ImageButton source={require('../images/backspace.png')} />
           </View>
           <View style={styles.from}>
             <Text>FROM </Text>
             <DropdownButton>Sydney office</DropdownButton>
           </View>
         </View>
       </View>
       <View style={styles.numberPad}>
         <NumberPad />
       </View>
       <View style={styles.cta}>
         <CallButton onPress={() => dispatch(dealWithIncomingCall())} />
       </View>
       {showDialCodePicker
         ? <DialCodePicker
            onClose={()=> dispatch(shouldShowDialCodePicker(false))}
            onValueChange={itemValue => dispatch(changeCountryCode(itemValue))}
            selectedValue={countryCode} />
         : null}
     </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  input: {
    flex: 2,
    justifyContent: 'flex-end',
    marginLeft: 60,
    marginRight: 60,
  },
  inputLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  inputText: {
    fontSize: 34,
    width: pageWidth - 120 - 45,
  },
  from: {
    flexDirection: 'row',
  },
  numberPad: {
    flex: 3.5,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 30,
    marginBottom: 30,
  },
  cta: {
    flex: 1,
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  const { callPad } = state;
  return {
    ...callPad,
  };
}

export default connect(mapStateToProps)(NumberPadView);
