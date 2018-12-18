import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Header from '../Header';
import RequiresLogin from '../RequiresLogin';
import { fetchMatched } from '../../actions';
import Chat from './Chat';

const StyledChatsPage = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const StyledHighlight = styled.TouchableHighlight`
  width: 100%;
  height: 50;
  margin-left: 16;
  justify-content: center;
`;

const StyledUsername = styled.Text`
  color: #fff;
  font-size: 17;
`;

export class ChatsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: false,
      user: null,
      room: null
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchMatched())
  }

  selectChat(user, room) {
    this.setState({
      chat: true,
      user,
      room
    })
  }

  render() {
    const { matched } = this.props
    const { chat, user, room } = this.state
    let chats
    if (matched.matched) {
      chats = matched.matched.map(match => {
        return (
          <StyledHighlight key={match.chatroom._id} onPress={() => this.selectChat(match._id, match.chatroom)}>
            <StyledUsername>{match._id.username}</StyledUsername>
          </StyledHighlight>
        )
      })
    }

    if (chat && user && room) {
      return (
        <StyledChatsPage>
          <Header heading="Chat with someone" />
          <Chat user={user} room={room} />
        </StyledChatsPage>
      )
    }

    return (
      <StyledChatsPage>
        <Header heading="Chats" />
        {chats}
      </StyledChatsPage>
    );
  }
}

const mapStateToProps = state => ({
  matched: state.user.matched
})

export default RequiresLogin()(connect(mapStateToProps)(ChatsPage));