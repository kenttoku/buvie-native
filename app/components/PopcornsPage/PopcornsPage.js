import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Navigation from '../Navigation';
import RequiresLogin from '../RequiresLogin';

export class PopcornsPage extends Component {
  render() {
    return (
      <View>
        <Text> Popcorns Page </Text>
      </View>
    );
  }
}

export default RequiresLogin()(connect()(PopcornsPage));