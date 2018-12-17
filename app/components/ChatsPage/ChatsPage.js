import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Header from '../Header';
import RequiresLogin from '../RequiresLogin';

const StyledChatsPage = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export class ChatsPage extends Component {
  render() {
    return (
      <StyledChatsPage>
        <Header heading="Chats" />
        <Text> Chats Page </Text>
      </StyledChatsPage>
    );
  }
}

export default RequiresLogin()(connect()(ChatsPage));