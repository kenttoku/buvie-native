import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import RequiresLogin from '../RequiresLogin';
import Header from '../Header';
import { clearAuth, resetMovies, resetUser } from '../../actions';
import { clearAuthToken } from '../../storage';

const StyledSettingsPage = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const StyledMenuItem = styled.TouchableHighlight`
  width: 100%;
  padding-left: 16;
`;

const StyledText = styled.Text`
  font-size: 17;
  color: #fff;
`;

export class SettingsPage extends Component {
  logOut() {
    this.props.dispatch(clearAuth());
    this.props.dispatch(resetMovies());
    this.props.dispatch(resetUser());
    clearAuthToken();
  }

  render() {
    return (
      <StyledSettingsPage>
        <Header heading="Settings" />
        <StyledMenuItem onPress={() => this.logOut()}>
          <StyledText>Log out</StyledText>
        </StyledMenuItem>
      </StyledSettingsPage>
    );
  }
}

export default RequiresLogin()(connect()(SettingsPage));