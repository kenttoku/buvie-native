import React, { Component } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { connect } from 'react-redux'
import md5 from 'js-md5';

import { fetchCurrentuser, fetchMatches, popcornUser, ignoreUser, filterUser } from '../../actions';
import MovieSelection from './MovieSelection';
import GenreSelection from './GenreSelection';
import Navigation from '../Navigation';

export class DashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCurrentuser())
      .then(() => this.props.dispatch(fetchMatches()))
  }

  popcorn(userId) {
    this.props.dispatch(popcornUser({ userId }))
      .then(() => this.props.dispatch(fetchCurrentuser()))
      .then(() => this.props.dispatch(fetchMatches()))
  }

  ignore(userId) {
    this.props.dispatch(ignoreUser({ userId }))
      .then(() => this.props.dispatch(filterUser(userId)))
      .then(() => this.props.dispatch(fetchCurrentuser()))
      .then(() => this.props.dispatch(fetchMatches()))
  }

  render() {
    const { genres, movies, matches, filter, loading } = this.props

    // if (loading) {
    //   return <Image
    //     source={require('../../assets/buvie.gif')}
    //   />
    // }

    if (!genres.length) {
      return <GenreSelection />;
    }

    if (!movies.length) {
      return <MovieSelection />;
    }

    const matchesList = matches
    .filter(user => !filter.includes(user.id))
    .map(user => {
      let uri = `https://www.gravatar.com/avatar/${md5(
        user.email
      )}?d=retro`;

      return (
        <React.Fragment key={user.id}>
          <Image
            style={{width: 50, height: 50}}
            source={{ uri }}
          />
          <Text >{user.username}</Text>
          <Button
            title="Popcorn"
            onPress={() => this.popcorn(user.id)}
          />
          <Button
            title="Ignore"
            onPress={() => this.ignore(user.id)}
          />
        </React.Fragment>
      );
    });

    return (
      <View>
        <Text>You Matched with:</Text>
        {matchesList[0] ? matchesList[0] : <Text>Nobody</Text>}
        <Navigation />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  loading: !!(state.auth.loading || state.user.loading || state.movie.loading),
  username: state.auth.currentUser.username,
  email: state.auth.currentUser.email,
  movies: state.user.movies,
  genres: state.user.genres,
  matches: state.user.matches,
  popcorn: state.user.popcorn,
  pending: state.user.pending,
  matched: state.user.matched,
  filter: state.user.filter
})

export default connect(mapStateToProps)(DashboardPage)