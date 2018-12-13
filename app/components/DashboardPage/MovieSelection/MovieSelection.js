import React, { Component } from 'react'
import { Button, Image, Switch, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { fetchMovies, updateUser } from '../../../actions'

export class MovieSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchMovies())
  }

  toggleSelected(movie) {
    if (!this.state.movies.includes(movie)) {
      this.setState({
        movies: [...this.state.movies, movie]
      });
    } else {
      this.setState({
        movies: this.state.movies.filter(movieId => movieId !== movie)
      });
    }
  }

  handleSubmit() {
    const { movies } = this.state;
    this.props.dispatch(updateUser({ movies }))
  }

  render() {
    const { movies } = this.props;
    console.log(this.state.movies)

    // TODO: Use images instead of text for choosing movies
    const input = movies.map(movie => {
      return (
      <React.Fragment key={movie.id}>
        <Text>{movie.title}</Text>
        <Switch
          onValueChange={() => this.toggleSelected(movie.id)}
          value={this.state.movies.includes(movie.id)}
        />
      </React.Fragment>);
    })

    return (
      <View>
        {input}
        <Button
          disabled={this.state.movies.length < 3}
          title="Continue"
          onPress={() => this.handleSubmit()}
        />
      </View>
    )
  }
}


const mapStateToProps = state => ({
  movies: state.movie.list
});

export default connect(mapStateToProps)(MovieSelection)