import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { fetchMovies } from '../../../actions'

export class MovieSelection extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies())
  }

  render() {
    const { movies } = this.props;
    console.log(movies)

    const input = movies.map(movie => {
      return <Text key={movie.id}>{movie.title}</Text>
    })

    return (
      <View>
        {input}
      </View>
    )
  }
}


const mapStateToProps = state => ({
  movies: state.movie.list
});

export default connect(mapStateToProps)(MovieSelection)