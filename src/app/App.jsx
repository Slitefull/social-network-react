import React from 'react';
import { Route } from 'react-router-dom';

import { pages } from '../consts';

import { ModalContainer, ProfileContainer, UsersContainer, Header, Footer, General, Dialogs} from './index';

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