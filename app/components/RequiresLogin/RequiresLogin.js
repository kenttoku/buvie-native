import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Redirect } from 'react-router-native';

export default () => Component => {
  function RequiresLogin(props) {
    const { authenticating, loggedIn, error, ...passThroughProps } = props;
    if (authenticating) {
      return  (
        <View>
          <Text>Logging in...</Text>
        </View>);
    } else if (!loggedIn || error) {
      return <Redirect to="/" />;
    }

    return <Component {...passThroughProps} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps = state => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  });

  return connect(mapStateToProps)(RequiresLogin);
};
