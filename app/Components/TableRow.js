/* @flow */
'use strict';

import React, {
  Component,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Hairline from './Hairline';

class TableRow extends Component {
  render() {
    const { onPress, top, rightArrow, children } = this.props;
    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor="rgba(255,255,255,0.25)">
        <View>
          { top ? <Hairline /> : null }
          <View style={styles.base}>
            {children}
            {rightArrow ? <Image style={styles.arrow} source={require('../images/right.png')} /> : null }
          </View>
          <Hairline />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: {
    marginLeft: 10,
  }
});

TableRow.defaultProps = {
  rightArrow: true,
}

export default TableRow;
