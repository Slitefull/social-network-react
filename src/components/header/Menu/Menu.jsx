import React from 'react';

import { AddMenuItem } from '../../index';
import { pages } from '../../../consts';

import './Menu.scss';


export const Menu = ({ showModal }) => (
  <nav className = "menu">
    <AddMenuItem link = { pages.links.generalPage } title = { pages.titles.generalPage } />
    <AddMenuItem link = { pages.links.profilePage } title = { pages.titles.profilePage } />
    <AddMenuItem link = { pages.links.usersPage } title = { pages.titles.usersPage } />
    <button onClick = { showModal } className="menu__item--button">Add</button>
  </nav>
)