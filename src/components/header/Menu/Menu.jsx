import React from 'react';
import {pages} from '../../../consts';

import {AddMenuItem} from '../../index';

import './Menu.scss';


export const Menu = ({ showModal, isAuth, email }) => (
  <nav className="menu">
    <AddMenuItem link={pages.links.generalPage} title={pages.titles.generalPage}/>
    <AddMenuItem link={pages.links.profilePage} title={pages.titles.profilePage}/>
    <AddMenuItem link={pages.links.dialogsPage} title={pages.titles.dialogsPage}/>
    <AddMenuItem link={pages.links.usersPage} title={pages.titles.usersPage}/>
    {
      !isAuth
        ? <AddMenuItem link={pages.links.authPage} title={pages.titles.authPage}/>
        : <p style={{marginLeft:20}} className="menu__item--link">{email}</p>
    }
    <button onClick={showModal} className="menu__item--button">Add</button>
  </nav>
)
