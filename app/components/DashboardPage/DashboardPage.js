import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { fetchCurrentuser } from '../../actions';
import MovieSelection from './MovieSelection';
import GenreSelection from './GenreSelection';

export class DashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCurrentuser())
  }

  render() {
    const { genres, movies } = this.props
    console.log(this.props)
    console.log(genres)
    if (!genres.length) {
      return <GenreSelection />;
    }

    if (!movies.length) {
      return <MovieSelection />;
    }

    console.log(this.props)
    return (
      <View>
        <Text>This is the Dashboard</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
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