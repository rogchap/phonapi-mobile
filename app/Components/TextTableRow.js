/* @flow */
'use strict';

import React, {
  Component,
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
          <Text style={styles.text}>
            {children}
          </Text>
          {rightText ? <Text>{rightText}</Text> : null}
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
    fontSize: 17,
  }
})

export default TextTableRow;
