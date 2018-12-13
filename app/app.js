import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter as Router, Route } from 'react-router-native'
import LandingPage from './components/LandingPage'
import store from './store';
import DashboardPage from './components/DashboardPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <View style={styles.container}>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
          </View>
        </Provider>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
