import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

const StyledNavigation = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 44;
  background-color: red;
`;

export default class Navigation extends Component {
  render() {
    return (
      <StyledNavigation>
        <Link to="/dashboard"><Text>Home</Text></Link>
        <Link to="/settings"><Text>Setting</Text></Link>
        <Link to="/popcorns"><Text>Popcorns</Text></Link>
        <Link to="/chats"><Text>Chats</Text></Link>
      </StyledNavigation>
    );
  }
}
