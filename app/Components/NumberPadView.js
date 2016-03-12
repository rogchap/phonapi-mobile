/* @flow */

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import DropdownButton from './DropdownButton';
import NumberPad from './NumberPad';
import ImageButton from './ImageButton';
import CallButton from './CallButton';

const { width: pageWidth } = Dimensions.get('window');

class NumberPadView extends Component {
  render() {
    return (
     <View style={styles.base}>
       <View style={styles.input}>
         <View>
           <DropdownButton>+61</DropdownButton>
           <View style={styles.inputLine}>
             <Text
               style={styles.inputText}
               numberOfLines={1}>
               0420 616 054
             </Text>
             <ImageButton source={require('../images/backspace.png')} />
           </View>
           <View style={styles.from}>
             <Text style={styles.fromText}>FROM </Text>
             <DropdownButton>Sydney office</DropdownButton>
           </View>
         </View>
       </View>
       <View style={styles.numberPad}>
         <NumberPad />
       </View>
       <View style={styles.cta}>
         <CallButton />
       </View>
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
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 28,
    width: pageWidth - 120 - 45,
  },
  from: {
    flexDirection: 'row',
  },
  fromText: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
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


export default NumberPadView;
