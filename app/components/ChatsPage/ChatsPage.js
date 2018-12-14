import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navigation from '../Navigation';

export default class ChatsPage extends Component {
  render() {
    return (
      <View>
        <Text> Chats Page </Text>
        <Navigation />
      </View>
    )
  }
}
