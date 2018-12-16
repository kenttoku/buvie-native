import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import RequiresLogin from '../RequiresLogin';
import { fetchPopcorn, popcornUser, ignoreUser } from '../../actions';

const StyledPopcornPage = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const StyledHeader = styled.Text`
  color: #fff;
  font-size: 17;
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

const StyledOptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSwipeListView = styled(SwipeListView)`
  width: 100%;
`;

const StyledPopcornButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75;
  background-color: #a33944;
`;

const StyledIgnoreButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75;
  background-color: #b8b999;
`;

const StyledButtonText = styled.Text`
  font-size: 17;
  color: ${props => props.isPopcorn ? '#fff' : '#000'};
  text-align: center;
`;

const RowFront = styled.View`
  align-items: flex-start;
  background-color: #212032;
  border-bottom-color: black;
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

export class PopcornsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'popcorn'
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchPopcorn())
  }

  popcorn(userId) {
    this.props.dispatch(popcornUser({ userId }))
      .then(() => this.props.dispatch(fetchPopcorn()))
  }

  ignore(userId) {
    this.props.dispatch(ignoreUser({ userId }))
      .then(() => this.props.dispatch(fetchPopcorn()))
  }

  openRow(rowRef, data) {
    console.log(data.item)
    // if (rowRef.isOpen) {
    //   rowRef.closeRow();
    // } else {
    //   rowRef.manuallySwipeRow(-150);
    // }
  }

  render() {
    let { popcorn, pending } = this.props;
    const { show } = this.state;

    if (show === 'popcorn') {
      let popcornDisplay = (
        <StyledNotice>
          <StyledNoticeText>No popcorn</StyledNoticeText>
        </StyledNotice>
      )

      if (popcorn.length) {
        popcorn = popcorn.map(user => {
          user.key = user._id;
          return user
        })
        popcornDisplay = (
          <StyledSwipeListView
            useFlatList
            data={popcorn}
            renderItem={ (data, rowMap) => (
              <StyledUserListItem onPress={ () => this.openRow(rowMap[data.item.index], data)}>
                <RowFront>
                  <StyledUsername>{data.item.username}</StyledUsername>
                </RowFront>
              </StyledUserListItem>
            )}
            renderHiddenItem={ data => (
              <RowBack>
                <StyledPopcornButtonContainer onPress={() => this.popcorn(data.item.id)}>
                  <StyledButtonText isPopcorn={true}>Popcorn</StyledButtonText>
                </StyledPopcornButtonContainer>
                <StyledIgnoreButtonContainer onPress={() => this.ignore(data.item.id)}>
                  <StyledButtonText>Ignore</StyledButtonText>
                </StyledIgnoreButtonContainer>
              </RowBack>
            )}
            rightOpenValue={-150}
            previewOpenValue={.01}
          />
        )
        // popcornDisplay = popcorn.map(user => {
        //   return (
        //     <StyledUserListItem>
        //       <StyledUsername>{user.username}</StyledUsername>
        //       <StyledOptionsContainer>
        //         <StyledPopcornButtonContainer onPress={() => this.popcorn(match.id)}>
        //           <StyledButtonText isPopcorn={true}>Popcorn</StyledButtonText>
        //         </StyledPopcornButtonContainer>

        //         <StyledIgnoreButtonContainer onPress={() => this.ignore(match.id)}>
        //           <StyledButtonText>Ignore</StyledButtonText>
        //         </StyledIgnoreButtonContainer>
        //       </StyledOptionsContainer>
        //     </StyledUserListItem>
        //   )
        // })
      }

      return (
        <StyledPopcornPage>
          <StyledHeader> Popcorns</StyledHeader>
          {popcornDisplay}
        </StyledPopcornPage>
      );
    }
    console.log(this.props.popcorn)
    console.log(this.props.pending)
    return (
      <StyledPopcornPage>
        <StyledHeader> Popcorns</StyledHeader>
      </StyledPopcornPage>
    );
  }
}

const mapStateToProps = state => ({
  popcorn: state.user.popcorn,
  pending: state.user.pending
})

export default RequiresLogin()(connect(mapStateToProps)(PopcornsPage));