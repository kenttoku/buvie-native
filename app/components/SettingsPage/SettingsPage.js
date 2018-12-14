import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import RequiresLogin from '../RequiresLogin';
import Navigation from '../Navigation';

export class SettingsPage extends Component {
  render() {
    return (
      <View>
        <Text> SettingsPage </Text>
        <Navigation />
      </View>
    )
  }
}

export default RequiresLogin()(connect()(SettingsPage));