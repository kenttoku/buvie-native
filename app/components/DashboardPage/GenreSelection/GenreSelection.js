import React, { Component } from 'react';
import { Button, Switch, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { updateUser } from '../../../actions';
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
        <React.Fragment key={genre.id}>
          <Text>{genre.name}</Text>
          <Switch
            disabled={genres.length >= 3 && !genres.includes(genre.name)}
            onValueChange={() => this.toggleSelected(genre.name)}
            value={genres.includes(genre.name)}
          />
        </React.Fragment>);
    });

    return (
      <View>
        <Text> Please choose 3 genres </Text>
        <Text> {genres.length} of 3 selected </Text>
        {inputs}
        <Button
          disabled={genres.length != 3}
          title="Continue"
          onPress={() => this.handleSubmit()}
        />
      </View>
    );
  }
}

export default connect()(GenreSelection);

