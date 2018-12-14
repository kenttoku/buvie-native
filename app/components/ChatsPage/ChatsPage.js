import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Navigation from '../Navigation';
import RequiresLogin from '../RequiresLogin';

export class ChatsPage extends Component {
  render() {
    return (
      <View>
        <Text> Chats Page </Text>
      </View>
    );
  }
}

export default RequiresLogin()(connect()(ChatsPage));