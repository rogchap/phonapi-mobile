/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import Text from './Text';
import { AsYouTypeFormatter } from 'google-libphonenumber';

class FormattedNumber extends Component {
  _formatter: AsYouTypeFormatter;
  constructor(props: any) {
    super(props);
    this._formatter = new AsYouTypeFormatter(props.countryCode);
  }

  static defaultProps = {
    countryCode: 'AU',
  };

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.countryCode !== this.props.countryCode) {
      this._formatter = new AsYouTypeFormatter(nextProps.countryCode);
    }
  }

  render() {
    const { children, countryCode, ...textProps } = this.props;

    let displayValue = '';
    if (children && children.length > 0) {
      this._formatter.clear();
      const length = children.length;
      for (let i = 0; i < length; ++i) {
        displayValue = this._formatter.inputDigit(children.charAt(i));
      }
    }
    return (
      <Text {...textProps}>{displayValue}</Text>
    );
  }
}

export default FormattedNumber;
