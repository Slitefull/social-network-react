import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

import {addPost, getProfileData, getStatus, setUserProfile, updateStatus} from '../../redux/profile-reducer';

import {Profile} from './Profile';
import {compose} from 'redux';

class ProfileWrapper extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getProfileData(userId);
    this.props.getStatus(userId)
  }

  render() {
    return (<Profile profile={this.props.profile} addPost={this.props.addPost}/>)
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

const mapDispatchToProps = dispatch => {
  return {
    setUserProfile: () => {
      dispatch(setUserProfile())
    },
    getProfileData: () => {
      dispatch(getProfileData())
    },
    getStatus: () => {
      dispatch(getStatus())
    },
    updateStatus: () => {
      dispatch(updateStatus())
    },
    addPost: content => {
      dispatch(addPost(content))
    }
  }
}

export const ProfileContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileWrapper)
