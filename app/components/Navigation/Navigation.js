import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default class Navigation extends Component {
  render() {
    return (
      <View>
        <Link to="/dashboard"><Text>Home</Text></Link>
        <Link to="/settings"><Text>Setting</Text></Link>
        <Link to="/popcorns"><Text>Popcorns</Text></Link>
        <Link to="/chats"><Text>Chats</Text></Link>
      </View>
    );
  }
}
