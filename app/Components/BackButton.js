/* @flow */
'use strict';

import React, {
  Component,
} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class BackButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    onPress: React.PropTypes.func,
  };

  render() {
    const { style, onPress } = this.props;

    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Image source={require('../images/back.png')} style={styles.img} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
    margin: 4,
  }
});

export default BackButton;
