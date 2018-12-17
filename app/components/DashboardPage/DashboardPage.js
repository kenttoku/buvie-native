import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';

import { fetchCurrentuser, fetchMatches, popcornUser, ignoreUser, filterUser } from '../../actions';
import MovieSelection from './MovieSelection';
import GenreSelection from './GenreSelection';
import RequiresLogin from '../RequiresLogin/RequiresLogin';
import Navigation from '../Navigation';

const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledDashboard = styled.View`
  flex: 1;
  margin-bottom: 64;
  padding-left: 16;
  padding-right: 16;
`;

const StyledMatchDisplay = styled.View`

`;

const StyledMatchPoster = styled.Image`
  width: 90%;
  height: 444;
`;

const StyledMatchName = styled.Text`
  color: #fff;
  font-size: 34;
  margin-bottom: 16;
`;

const StyledSpinnerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledOptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledPopcornButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 44px;
  margin-right: 16px;
  flex: 1;
  background-color: #a33944;
`;

const StyledIgnoreButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 44px;
  margin-left: 16px;
  flex: 1;
  background-color: #b8b999;
`;

const StyledButtonText = styled.Text`
  font-size: 17;
  color: ${props => props.isPopcorn ? '#fff' : '#000'};
  text-align: center;
`;
export class DashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCurrentuser())
      .then(() => this.props.dispatch(fetchMatches()));
  }

  popcorn(userId) {
    this.props.dispatch(popcornUser({ userId }))
      .then(() => this.props.dispatch(fetchCurrentuser()))
      .then(() => this.props.dispatch(fetchMatches()));
  }

  ignore(userId) {
    this.props.dispatch(ignoreUser({ userId }))
      .then(() => this.props.dispatch(filterUser(userId)))
      .then(() => this.props.dispatch(fetchCurrentuser()))
      .then(() => this.props.dispatch(fetchMatches()));
  }

  render() {
    const { genres, movies, matches, filter, loading } = this.props;

    if (loading) {
      return (
        <StyledSpinnerView>
          <Image
            source={require('../../assets/images/buvie.gif')}
          />
        </StyledSpinnerView>
      );
    }

    if (!genres.length) {
      return <GenreSelection />;
    }

    if (!movies.length) {
      return <MovieSelection />;
    }

    const match = matches.filter(user => !filter.includes(user.id))[0];

    let matchDisplay;
    if (match) {
      const matchMovies = match.movies.map(movie => {
        return (
          <ImageContainer key={movie._id}>
            <StyledMatchPoster
              source={{ uri: movie.poster }}
              resizeMode="contain"
            />
          </ImageContainer>
        );
      });
      matchDisplay = (
        <StyledMatchDisplay>
          <Swiper>
            {matchMovies}
          </Swiper>
          <StyledMatchName>{match.username}</StyledMatchName>
          <StyledOptionsContainer>
            <StyledPopcornButtonContainer onPress={() => this.popcorn(match.id)}>
              <StyledButtonText isPopcorn={true}>Popcorn</StyledButtonText>
            </StyledPopcornButtonContainer>

            <StyledIgnoreButtonContainer onPress={() => this.ignore(match.id)}>
              <StyledButtonText>Ignore</StyledButtonText>
            </StyledIgnoreButtonContainer>
          </StyledOptionsContainer>
        </StyledMatchDisplay>
      );
    }

    return (
      <React.Fragment>
        <StyledDashboard>
          {matchDisplay}
        </StyledDashboard>
        <Navigation />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: !!(state.auth.loading || state.user.loading || state.movie.loading),
  movies: state.user.movies,
  genres: state.user.genres,
  matches: state.user.matches,
  filter: state.user.filter
});

export default RequiresLogin()(connect(mapStateToProps)(DashboardPage));
