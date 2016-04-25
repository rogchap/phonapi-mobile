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

class MenuButton extends Component {

  static propTypes = {
    style: View.propTypes.style,
    onPress: React.PropTypes.func,
  };

  render() {
    const { style } = this.props;
    return (
      <TouchableOpacity style={[styles.base, style]} onPress={this._onPress.bind(this)}>
        <Image source={require('../images/menu.png')} style={styles.img} />
      </TouchableOpacity>
    );
  }

  _onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    } else {
      this.context.drawer.toggle();
    }
  }
}

MenuButton.contextTypes = {
  drawer: React.PropTypes.object,
};

const styles = StyleSheet.create({
  base: {
    position: 'absolute',
    left: 15,
    top: 30,
  },
  img: {
    width: 22,
    height: 17,
    marginTop: 3,
    marginBottom: 3,
  }
});

export default MenuButton;
