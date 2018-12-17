import React from 'react';
import styled from 'styled-components/native';

const StyledHeaderView = styled.View`
  text-align: center;
  justify-content: center;
  background-color: #313041;
  height: 44;
  width: 100%;
  border-bottom-color: black;
  border-bottom-width: 1;
`;

const StyledHeaderText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 17;
`;

const Header = ({ heading }) => (
  <StyledHeaderView>
    <StyledHeaderText>{ heading }</StyledHeaderText>
  </StyledHeaderView>
);

export default Header;