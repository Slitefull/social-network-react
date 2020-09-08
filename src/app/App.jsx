import React from 'react';
import { Route } from 'react-router-dom';
import { ModalContainer, Header, Profile, Footer, General} from './index';
import UsersContainer from '../pages/users/UsersContainer';
import { pages } from '../consts';

import './App.scss';


export const App = ({ isModal }) => (
  <div className = "App">
    <Header />
    <Route path = { pages.links.generalPage } component = { General } />
    <Route path = { pages.links.profilePage } component = { Profile } />
    <Route path = { pages.links.usersPage } component = { UsersContainer } />
    { isModal && <ModalContainer /> }
    <Footer />
  </div>
)
