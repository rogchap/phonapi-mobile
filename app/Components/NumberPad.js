/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';
import NumberKey from './NumberKey';

class NumberPad extends Component {
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.row}>
          <NumberKey text="1" onPress={this._onKeyPress.bind(this, '1')} />
          <NumberKey text="2" onPress={this._onKeyPress.bind(this, '2')} />
          <NumberKey text="3" onPress={this._onKeyPress.bind(this, '3')} />
        </View>
        <View style={styles.row}>
          <NumberKey text="4" onPress={this._onKeyPress.bind(this, '4')} />
          <NumberKey text="5" onPress={this._onKeyPress.bind(this, '5')} />
          <NumberKey text="6" onPress={this._onKeyPress.bind(this, '6')} />
        </View>
        <View style={styles.row}>
          <NumberKey text="7" onPress={this._onKeyPress.bind(this, '7')} />
          <NumberKey text="8" onPress={this._onKeyPress.bind(this, '8')} />
          <NumberKey text="9" onPress={this._onKeyPress.bind(this, '9')} />
        </View>
        <View style={styles.row}>
          <NumberKey text="*" onPress={this._onKeyPress.bind(this, '*')} />
          <NumberKey
            text="0"
            onPress={this._onKeyPress.bind(this, '0')}
            onLongPress={this._onLongKeyPress.bind(this, '+')}  />
          <NumberKey text="#" onPress={this._onKeyPress.bind(this, '#')} />
        </View>
      </View>
    )
  }

  _onKeyPress(key:string) {
    const { onPress } = this.props;
    onPress && onPress(key);
  }

  _onLongKeyPress(key:string) {
    const { onLongPress } = this.props;
    onLongPress && onLongPress(key);
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default NumberPad;
