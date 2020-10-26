import React from "react";
import {DialogsUsersContainer, DialogsMessagesContainer} from './index';

import './Dialogs.scss';


export const Dialogs = () => (
  <main className="dialogs">
    <DialogsUsersContainer/>
    <DialogsMessagesContainer/>
  </main>
)