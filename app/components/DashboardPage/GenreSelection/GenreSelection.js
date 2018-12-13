import React, { Component } from 'react'
import { Button, Switch, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { updateUser } from '../../../actions'
export class GenreSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      'Action & Adventure': false,
      'Children & Family': false,
      'Comedy': false,
      'Documentary': false,
      'Drama': false,
      'International': false,
      'Horror': false,
      'SciFi & Fantasy': false,
      'Thriller': false,
      count: 0
    }
  }

  toggleSelected(genre) {
    let change = 0;
    if (this.state[genre]) {
      change--;
    } else {
      change++
    }
    this.setState({
      [genre] : !this.state[genre],
      count: this.state.count + change
    })
  }

  handleSubmit() {
    const genres = []
    if (this.state['Action & Adventure']) {
      genres.push('Action & Adventure')
    }
    if (this.state['Children & Family']) {
      genres.push('Children & Family')
    }
    if (this.state['Comedy']) {
      genres.push('Comedy')
    }
    if (this.state['Documentary']) {
      genres.push('Documentary')
    }
    if (this.state['Drama']) {
      genres.push('Drama')
    }
    if (this.state['Horror']) {
      genres.push('Horror')
    }
    if (this.state['International']) {
      genres.push('International')
    }
    if (this.state['SciFi & Fantasy']) {
      genres.push('SciFi & Fantasy')
    }
    if (this.state['Thriller']) {
      genres.push('Thriller')
    }

    this.props.dispatch(updateUser({genres}))
  }

  render() {
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
            disabled={this.state.count >= 3 && !this.state[genre.name]}
            onValueChange={() => this.toggleSelected(genre.name)}
            value={this.state[genre.name]}
          />
        </React.Fragment>);
    });

    return (
      <View>
        <Text> Please choose 3 genres </Text>
        <Text> {this.state.count} of 3 selected </Text>
        {inputs}
        <Button
          disabled={this.state.count != 3}
          title="Continue"
          onPress={() => this.handleSubmit()}
        />
      </View>
    )
  }
}

export default connect()(GenreSelection);

