import React from 'react';
import styled from 'styled-components/native';
import logo from '../../assets/images/icon.png';

const StyledSpinnerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledLoader = styled.Image`
  height: 100;
  width: 110;
`;

export default () => (
  <StyledSpinnerView>
    {/* <StyledLoader source={logo} /> */}
  </StyledSpinnerView>
)

