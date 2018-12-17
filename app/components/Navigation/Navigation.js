import React, { Component } from 'react';
import { Image } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

const StyledNavigationView = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 44;
  background-color: #313041;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledNavigationText = styled.Text`
  color: #fff;
  font-size: 10;
`;

const StyledNavigationImage = styled.Image`
`;

const StyledLinkView = styled.View`
  align-items: center;
  justify-content: center;
`;

export default class Navigation extends Component {
  render() {
    return (
      <StyledNavigationView>
        <Link to="/dashboard">
          <StyledLinkView>
            <Image source={require('../../assets/images/baseline_home_white_18dp.png')} />
            <StyledNavigationText>Home</StyledNavigationText>
          </StyledLinkView>
        </Link>
        <Link to="/settings">
          <StyledLinkView>
            <Image source={require('../../assets/images/baseline_settings_white_18dp.png')} />
            <StyledNavigationText>Setting</StyledNavigationText>
          </StyledLinkView>
        </Link>
        <Link to="/popcorns">
          <StyledLinkView>
            <Image source={require('../../assets/images/baseline_person_add_white_18dp.png')} />
            <StyledNavigationText>Popcorns</StyledNavigationText>
          </StyledLinkView>
        </Link>
        <Link to="/chats">
          <StyledLinkView>
            <Image source={require('../../assets/images/baseline_chat_white_18dp.png')} />
            <StyledNavigationText>Chats</StyledNavigationText>
          </StyledLinkView>
        </Link>
      </StyledNavigationView>
    );
  }
}
