/* @flow */
'use strict';

import React, {
  PropTypes,
  Component,
} from 'react-native';
import ImageButton from './ImageButton';

class SwitchButton extends Component {

  static propTypes = {
    on: PropTypes.bool,
    onImageSrc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    offImageSrc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  render() {
    const { on, onImageSrc, offImageSrc, ...btnProps } = this.props;
    const icon = on ? onImageSrc : offImageSrc;
    return (
      <ImageButton source={icon} {...btnProps} />
    );
  }
}

export default SwitchButton;
