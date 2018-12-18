import React, { Component } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Header from '../Header';

import RequiresLogin from '../RequiresLogin';
import { fetchPopcorn, popcornUser, ignoreUser, filterUser, neverMindUser } from '../../actions';
import Spinner from '../Spinner';

const StyledPopcornPage = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const StyledNotice = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledNoticeText = styled.Text`
  color: #fff;
  font-size: 17;
`;

const StyledUserListItem = styled.TouchableHighlight`
  height: 50;
  width: 100%;
`;

const StyledUsername = styled.Text`
  color: #fff;
  font-size: 17;
`;

const StyledSwipeListView = styled(SwipeListView)`
  width: 100%;
`;

const StyledPopcornButtonContainer = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75;
  background-color: #4cd964;
`;

const StyledIgnoreButtonContainer = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75;
  background-color: #ff3b30;
`;

const StyledNeverMindButtonContainer = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75;
  background-color: #ff3b30;
`;

const StyledButtonText = styled.Text`
  font-size: 17;
  color: ${props => props.isPopcorn ? '#000' : '#fff'};
  text-align: center;
`;

const RowFront = styled.View`
  align-items: flex-start;
  background-color: #212032;
  border-bottom-color: #8b8b99;
  border-bottom-width: 1;
  justify-content: center;
  padding-left: 16;
  height: 50;
  width: 100%;
`;

const RowBack = styled.View`
  align-items: center;
  background-color: #212032;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const ToggleMenuContainer = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A33944;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  width: 100%;
  height: 52;
`;

const ToggleMenuText = styled.Text`
  color: #fff;
  font-size: 17;
`;

export class PopcornsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'popcorn'
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchPopcorn());
  }

  popcorn(userId) {
    this.props.dispatch(popcornUser({ userId }))
      .then(() => this.props.dispatch(fetchPopcorn()));
  }

  ignore(userId) {
    this.props.dispatch(ignoreUser({ userId }))
      .then(() => this.props.dispatch(filterUser(userId)))
      .then(() => this.props.dispatch(fetchPopcorn()));
  }

  neverMind(userId) {
    this.props.dispatch(neverMindUser({ userId }))
      .then(() => this.props.dispatch(filterUser(userId)))
      .then(() => this.props.dispatch(fetchPopcorn()));
  }

  openRow(rowRef, size) {
    if (!rowRef.isOpen) {
      rowRef.manuallySwipeRow(size);
    }
  }

  toggleList() {
    let show = 'popcorn';
    if (this.state.show === 'popcorn') {
      show = 'pending';
    }

    this.setState({ show });
  }

  render() {
    let { popcorn, pending, loading } = this.props;
    const { show } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (show === 'popcorn') {
      let popcornDisplay = (
        <StyledNotice>
          <StyledNoticeText>No popcorn</StyledNoticeText>
        </StyledNotice>
      );

      popcorn = popcorn.filter(user => !this.props.filter.includes(user._id));

      if (popcorn.length) {
        popcorn = popcorn.map(user => {
          user.key = user._id;
          return user;
        });
        popcornDisplay = (
          <StyledSwipeListView
            useFlatList
            data={popcorn}
            renderItem={ (data, rowMap) => (
              <StyledUserListItem onPress={ () => this.openRow(rowMap[data.item.key], -150)}>
                <RowFront>
                  <StyledUsername>{data.item.username}</StyledUsername>
                </RowFront>
              </StyledUserListItem>
            )}
            renderHiddenItem={ data => (
              <RowBack>
                <StyledPopcornButtonContainer onPress={() => this.popcorn(data.item._id)}>
                  <StyledButtonText isPopcorn={true}>Popcorn</StyledButtonText>
                </StyledPopcornButtonContainer>
                <StyledIgnoreButtonContainer onPress={() => this.ignore(data.item._id)}>
                  <StyledButtonText>Ignore</StyledButtonText>
                </StyledIgnoreButtonContainer>
              </RowBack>
            )}
            rightOpenValue={-150}
            previewOpenValue={.01}
          />
        );
      }

      return (
        <StyledPopcornPage>
          <Header heading="Popcorns" />
          <ToggleMenuContainer onPress={() => this.toggleList()}>
            <ToggleMenuText>Show Pending</ToggleMenuText>
          </ToggleMenuContainer>
          {popcornDisplay}
        </StyledPopcornPage>
      );
    }

    if (show === 'pending') {
      let pendingDisplay = (
        <StyledNotice>
          <StyledNoticeText>No pending</StyledNoticeText>
        </StyledNotice>
      );

      pending = pending.filter(user => !this.props.filter.includes(user._id));

      if (pending.length) {
        pending = pending.map(user => {
          user.key = user._id;
          return user;
        });
        pendingDisplay = (
          <StyledSwipeListView
            useFlatList
            data={pending}
            renderItem={ (data, rowMap) => (
              <StyledUserListItem onPress={ () => this.openRow(rowMap[data.item.key], -75)}>
                <RowFront>
                  <StyledUsername>{data.item.username}</StyledUsername>
                </RowFront>
              </StyledUserListItem>
            )}
            renderHiddenItem={ data => (
              <RowBack>
                <StyledNeverMindButtonContainer onPress={() => this.neverMind(data.item._id)}>
                  <StyledButtonText>Delete</StyledButtonText>
                </StyledNeverMindButtonContainer>
              </RowBack>
            )}
            rightOpenValue={-75}
            previewOpenValue={.01}
          />
        );
      }

      return (
        <StyledPopcornPage>
          <Header heading="Pending Popcorn" />
          <ToggleMenuContainer onPress={() => this.toggleList()}>
            <ToggleMenuText>Show Popcorn</ToggleMenuText>
          </ToggleMenuContainer>
          {pendingDisplay}
        </StyledPopcornPage>
      );
    }
  }
}

const mapStateToProps = state => ({
  loading: !!(state.auth.loading || state.user.loading || state.movie.loading),
  popcorn: state.user.popcorn,
  pending: state.user.pending,
  filter: state.user.filter
});

export default RequiresLogin()(connect(mapStateToProps)(PopcornsPage));