import React, { Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { updateUser } from '../../../actions';
import StyledButtonContainer from '../../styles/StyledButtonContainer';
import StyledButtonText from '../..//styles/StyledButtonText';

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16;
  padding-right: 16;
  padding-bottom: 64;
`;

const StyledGenreView = styled.View`
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

const StyledGenreText = styled.Text`
  flex: 4;
  color: #fff;
  font-size: 17;
`;

const StyledGenreSwitch = styled.Switch`
  flex: 1;
`;


export class GenreSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  toggleSelected(genre) {
    if (!this.state.genres.includes(genre)) {
      this.setState({
        genres: [...this.state.genres, genre]
      });
    } else {
      this.setState({
        genres: this.state.genres.filter(listGenre => listGenre !== genre)
      });
    }
  }

  handleSubmit() {
    const { genres } = this.state;
    this.props.dispatch(updateUser({ genres }));
  }

  render() {
    const { genres } = this.state;

    const genreList = [
      { name: 'Action & Adventure', id: 'action' },
      { name: 'Children & Family', id: 'family' },
      { name: 'Comedy', id: 'comedy' },
      { name: 'Documentary', id: 'documentary' },
      { name: 'Drama', id: 'drama' },
      { name: 'International', id: 'international' },
      { name: 'Horror', id: 'horror' },
      { name: 'SciFi & Fantasy', id: 'fantasy' },
      { name: 'Thriller', id: 'thriller' },
    ];

    const inputs = genreList.map(genre => {
      return (
        <StyledGenreView key={genre.id}>
          <StyledGenreText>{genre.name}</StyledGenreText>
          <StyledGenreSwitch
            disabled={genres.length >= 3 && !genres.includes(genre.name)}
            onValueChange={() => this.toggleSelected(genre.name)}
            value={genres.includes(genre.name)}
          />
        </StyledGenreView>);
    });

    return (
      <StyledView>
        <StyledInstructions> Please choose 3 genres </StyledInstructions>
        <StyledFeedback> {genres.length} of 3 selected </StyledFeedback>
        {inputs}

        <StyledButtonContainer
          disabled={genres.length !== 3}
          onPress={() => this.handleSubmit()}>
          <StyledButtonText>Continue</StyledButtonText>
        </StyledButtonContainer>
      </StyledView>
    );
  }
}

export default connect()(GenreSelection);

