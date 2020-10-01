import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import { getProfileData, getStatus, setUserProfile, updateStatus} from '../../redux/profile-reducer';

import { Profile } from './Profile';
import { compose } from 'redux';

class ProfileWrapper extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getProfileData(userId);
    this.props.getStatus(userId)
  }

  render() {
    return (<Profile profile = { this.props.profile } status = { this.props.status } updateStatus = { this.props.updateStatus } />)
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export const ProfileContainer = compose(connect(mapStateToProps, {
  setUserProfile,
  getProfileData,
  getStatus,
  updateStatus
}), withRouter, withAuthRedirect)(ProfileWrapper)
