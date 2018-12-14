import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';
import { NativeRouter as Router, Route } from 'react-router-native'
import LandingPage from './components/LandingPage'
import store from './store';
import DashboardPage from './components/DashboardPage';
import ChatsPage from './components/ChatsPage';
import PopcornsPage from './components/PopcornsPage';
import SettingsPage from './components/SettingsPage';

const StyledView = styled.View`
  margin-top: 44;
  padding-bottom: 83;
  padding-left: 16;
  padding-right: 16;
  flex: 1;
  align-items: center;
  background-color: #212032;
`;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <StyledView>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/chats" component={ChatsPage} />
            <Route exact path="/popcorns" component={PopcornsPage} />
            <Route exact path="/settings" component={SettingsPage} />
          </StyledView>
        </Provider>
      </Router>
    );
  }
}