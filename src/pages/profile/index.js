import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setUserProfile } from '../../redux/profile-reducer';

import { Profile } from './Profile';


class ProfileWrapper extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId){ userId = 2 }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => { this.props.setUserProfile(response.data) })
  }

  render() { return <Profile profile = { this.props.profile }/> }
}

const mapStateToProps = state => ({ profile: state.profilePage.profile })

const WithUrlDataContainerComponent = withRouter(ProfileWrapper);

export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);