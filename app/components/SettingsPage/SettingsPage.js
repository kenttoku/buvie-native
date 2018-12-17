import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import RequiresLogin from '../RequiresLogin';
import Header from '../Header';

const StyledSettingsPage = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export class SettingsPage extends Component {
  render() {
    return (
      <StyledSettingsPage>
        <Header heading="Settings" />
        <Text> SettingsPage </Text>
      </StyledSettingsPage>
    );
  }
}

export default RequiresLogin()(connect()(SettingsPage));