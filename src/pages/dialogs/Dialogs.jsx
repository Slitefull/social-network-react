import React from "react";
import {DialogsUsersContainer, DialogsMessagesContainer} from './index';

import './Profile.scss';


export const Dialogs = () => (
  <main className="profile">
    <DialogsUsersContainer/>
    <DialogsMessagesContainer/>
  </main>
)