/* @flow */
'use strict';

import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import InfoPager from '../components/InfoPager';

import { changePageIndex } from '../actions/info';

class InfoPagerContainer extends Component {

  render() {
    return (
      <InfoPager {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { info } = state;
  return { ...info };
}

export default connect(
  mapStateToProps,
  { changePageIndex })(InfoPagerContainer);
