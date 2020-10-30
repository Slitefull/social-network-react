import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

import {addPost, getProfileData, requestStatus, updateStatus} from './profile-reducer';

import {Profile} from './Profile';
import {compose} from 'redux';
import {getProfile, getStatus} from "./profile-selectors";

class ProfileWrapper extends React.Component {
  componentDidMount() {
    const {getProfileData, getStatus} = this.props;

    let userId = this.props.match.params.userId;
    getProfileData(userId);
    getStatus(userId);
  }

  render() {
    const {profile, addPost} = this.props;

    return (<Profile profile={profile} addPost={addPost}/>)
  }
}

const mapStateToProps = state => ({
  profile: getProfile(state),
  status: getStatus(state)
})

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: () => {
      dispatch(getProfileData())
    },
    getStatus: () => {
      dispatch(requestStatus())
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
