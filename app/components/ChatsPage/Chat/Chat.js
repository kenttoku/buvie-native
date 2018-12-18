import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import io from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';

import { BASE_URL } from '../../../config';
import { appendMessage, fetchMessages, putMessages } from '../../../actions';

const StyledChat = styled.View`
  padding-bottom: 44px;
  flex: 1;
  width: 100%;
  background-color: #fff;
`;

export class Chat extends Component {
  constructor() {
    super();
    this.state = {
      socket: io(BASE_URL),
      input: '',
      match: '',
      chatroom: '',
    }

    this.state.socket.on('chat', data => {
      data.createdAt = new Date();
      this.props.dispatch(putMessages(this.state.chatroom, [...this.props.messages, data]));
      this.props.dispatch(appendMessage(data))
    });
  }

  componentDidMount() {
    const { user, room } = this.props;

    const match = user ? user.username : 'everyone';
    const chatroom = room ? room._id : 'everyone';

    this.setState({ match, chatroom });

    this.state.socket.emit('subscribe', chatroom);

    if (chatroom !== 'everyone') {
      this.props.dispatch(fetchMessages(chatroom))
    }
  }

  componentWillUnmount() {
    this.state.socket.disconnect();
  }

  onSend(data) {
    this.state.socket.emit('chat', {
      message: data.text,
      handle: this.props.username,
      room: this.state.chatroom
    });
  }

  render() {
    const { username, messages } = this.props
    const giftedMessages = messages.map((data, i) => {
      return {
        _id: `${data.handle}-message-${i}`,
        text: data.message,
        user: {
          _id: data.handle,
          name: data.handle
        },
      }
    }).reverse();

    return (
      <StyledChat>
        <GiftedChat
          inverted={true}
          messages={giftedMessages}
          user={{ _id: username, name: username }}
          onSend={([data]) => this.onSend(data)}
        />
      </StyledChat>
    )
  }
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username,
  authToken: state.auth.authToken,
  messages: state.user.messages
})


export default connect(mapStateToProps)(Chat)
