import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {setProfile, setUserProfile} from '../../redux/profile-reducer';

import { Profile } from './Profile';

class ProfileWrapper extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.setProfile(userId)
  }

  render() { return <Profile profile = { this.props.profile }/> }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
})

const WithUrlDataContainerComponent = withRouter(ProfileWrapper);

export const ProfileContainer = connect(mapStateToProps, { setUserProfile, setProfile })(WithUrlDataContainerComponent);