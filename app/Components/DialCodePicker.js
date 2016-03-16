/* @flow */
'use strict';

import React, {
  Component,
} from 'react-native';
import Picker from './Picker';
import CountryList from '../constants/CountryList';

const { Picker: RNPicker } = React;

class DialCodePicker extends Component {

  render() {
    return (
      <Picker {...this.props}>
        {CountryList.map((c, i) => <RNPicker.Item key={i} label={`${c.dialCode} ${c.name}`} value={c.code} />)}
      </Picker>
    );
  }
}

export default DialCodePicker;
