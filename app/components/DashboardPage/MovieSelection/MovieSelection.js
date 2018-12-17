import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import StyledButtonContainer from '../../styles/StyledButtonContainer'
import StyledButtonText from '../..//styles/StyledButtonText'

import { fetchMovies, updateUser, fetchCurrentuser, fetchMatches } from '../../../actions';


const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 64;
`;

const StyledMovieView = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const StyledInstructions = styled.Text`
  margin-top: 16;
  margin-bottom: 16;
  font-size: 17;
  color: #fff;
`;

const StyledFeedback = styled.Text`
  margin-bottom: 16;
  color: #fff;
  font-size: 13;
`;

const StyledMovieText = styled.Text`
  flex: 4;
  color: #fff;
  font-size: 17;
`;

const StyledMovieSwitch = styled.Switch`
  flex: 1;
`;


export class MovieSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchMovies());
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
      .then(() => this.props.dispatch(fetchCurrentuser()))
      .then(() => this.props.dispatch(fetchMatches()));
  }

  render() {
    const { movies } = this.props;

    // TODO: Use images instead of text for choosing movies
    const input = movies.map(movie => {
      return (
        <StyledMovieView key={movie.id}>
          <StyledMovieText numberOfLines={10}>{movie.title}</StyledMovieText>
          <StyledMovieSwitch
            onValueChange={() => this.toggleSelected(movie.id)}
            value={this.state.movies.includes(movie.id)}
          />
        </StyledMovieView>);
    });

    return (
      <StyledView>
        <StyledInstructions> Please choose 3 or more movies </StyledInstructions>
        <StyledFeedback> {this.state.movies.length} selected </StyledFeedback>
        {input}
        <StyledButtonContainer
          disabled={this.state.movies.length < 3}
          onPress={() => this.handleSubmit()}>
          <StyledButtonText>Continue</StyledButtonText>
        </StyledButtonContainer>
      </StyledView>
    );
  }
}


const mapStateToProps = state => ({
  movies: state.movie.list
});

export default connect(mapStateToProps)(MovieSelection);