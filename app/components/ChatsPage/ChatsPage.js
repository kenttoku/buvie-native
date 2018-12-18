import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Header from '../Header';
import RequiresLogin from '../RequiresLogin';
import { fetchMatched, resetMessage } from '../../actions';
import Chat from './Chat';
import Spinner from '../Spinner';

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
  border-bottom-color: #8b8b99;
  border-bottom-width: 1;
`;

const StyledUsername = styled.Text`
  color: #fff;
  font-size: 17;
`;

const StyledBackButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  position: absolute;
  height: 44;
  left: 0;
  top: 0;
  padding-right: 16;
  justify-content: center;
  align-items: center;
`;

const StyledBackButtonText = styled.Text`
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

  resetChat() {
    this.setState({
      chat: false,
      user: null,
      room: null
    })
    this.props.dispatch(resetMessage())
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
          <Header heading={user.username} />
          <StyledBackButtonContainer onPress={() => this.resetChat()} >
            <Image source={require('../../assets/images/baseline_chevron_left_white_36dp.png')} />
            <StyledBackButtonText>Back</StyledBackButtonText>
          </StyledBackButtonContainer>
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