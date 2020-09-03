import React from "react";

import { ProfileUsersContainer, ProfileMessagesContainer } from './index';

import './Dialogs.scss';


export const Profile = () => (
  <main className = "dialogs">
    <ProfileUsersContainer />
    <ProfileMessagesContainer />
  </main>
)