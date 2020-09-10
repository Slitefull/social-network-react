import React from 'react';
import * as axios from 'axios';
import { Profile } from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';
import { connect } from 'react-redux';

export const ProfileContainer = class extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        setUserProfile(response.data)
      });
  }

  render() {
    return <Profile {...this.props} /> }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
