import React from 'react';
import { Route } from 'react-router-dom';
import { GeneralContainer, ModalContainer, Header, Profile, Users, Footer } from './index';
import { pages } from '../consts';

import './App.scss';


export const App = ({ isModal }) => (
  <div className="App">
    <Header />
    <Route path = { pages.links.generalPage } component = { GeneralContainer } />
    <Route path = { pages.links.profilePage } component = { Profile } />
    <Route path = { pages.links.usersPage } component = { Users } />
    { isModal && <ModalContainer /> }
    <Footer />
  </div>
)