import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import { setProfileData, setUserProfile } from '../../redux/profile-reducer';

import { Profile } from './Profile';
import { compose } from 'redux';

class ProfileWrapper extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.setProfileData(userId)
  }

  render() {
    return (<Profile profile={this.props.profile} />)
  }
}

const mapStateToProps = state => ({profile: state.profilePage.profile})

export const ProfileContainer = compose(connect(mapStateToProps, {
  setUserProfile,
  setProfileData
}), withRouter, withAuthRedirect)(ProfileWrapper)
