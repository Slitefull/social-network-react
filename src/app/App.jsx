import React from 'react';
import { Route } from 'react-router-dom';
import { ModalContainer, Header, Footer, General} from './index';
import { Dialogs } from '../pages/dialogs/Dialogs';
import UsersContainer from '../pages/users/UsersContainer';
import { ProfileContainer } from '../pages/profile/ProfileContainer';

import { pages } from '../consts';

import './App.scss';


export const App = ({ isModal }) => (
  <div className = "App">
    <Header />
    <Route path = { pages.links.generalPage } component = { General } />
    <Route path = { pages.links.profilePage } component = { ProfileContainer } />
    <Route path = { pages.links.dialogsPage } component = { Dialogs } />
    <Route path = { pages.links.usersPage } component = { UsersContainer } />
    { isModal && <ModalContainer /> }
    <Footer />
  </div>
)
