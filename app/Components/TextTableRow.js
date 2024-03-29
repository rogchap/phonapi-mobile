/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import TableRow from './TableRow';
import Text from './Text';

class TextTableRow extends Component {
  render() {
    const { ...other, rightText, children } = this.props;

    return (
      <TableRow {...other}>
        <View style={styles.base}>
          <Text>
            {children}
          </Text>
          {rightText ? <Text style={styles.text}>{rightText}</Text> : null}
        </View>
      </TableRow>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  }
})

export default TextTableRow;
