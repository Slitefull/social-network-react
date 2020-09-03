import React from "react";

import { ProfileUsersContainer, ProfileMessagesContainer } from './index';

import './Profile.scss';


export const Profile = () => (
  <main className = "profile">
    <ProfileUsersContainer />
    <ProfileMessagesContainer />
  </main>
)