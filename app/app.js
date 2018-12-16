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
import Navigation from './components/Navigation';

const StyledView = styled.View`
  padding-bottom: 44;
  padding-left: 16;
  padding-right: 16;
  flex: 1;
  align-items: center;
  background-color: #212032;
`;

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: green;
`;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <StyledSafeAreaView>
            <StyledView>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route exact path="/dashboard" component={Navigation} />
              <Route exact path="/chats" component={ChatsPage} />
              <Route exact path="/chats" component={Navigation} />
              <Route exact path="/popcorns" component={PopcornsPage} />
              <Route exact path="/popcorns" component={Navigation} />
              <Route exact path="/settings" component={SettingsPage} />
              <Route exact path="/settings" component={Navigation} />
            </StyledView>
          </StyledSafeAreaView>
        </Provider>
      </Router>
    );
  }
}