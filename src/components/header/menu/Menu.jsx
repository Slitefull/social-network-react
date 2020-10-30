import React from 'react';
import {pages} from '../../../consts';
import {NavLink} from "react-router-dom";

import './Menu.scss';


const AddMenuItem = ({link, title}) => (
  <div className="menu__item"><NavLink to={link} className="menu__item--link">{title}</NavLink></div>)

export const Menu = ({showModal, isAuth, email, logout}) => {
  return (
    <nav className="menu">
      <AddMenuItem link={pages.links.generalPage} title={pages.titles.generalPage}/>
      <AddMenuItem link={pages.links.profilePageMenu} title={pages.titles.profilePage}/>
      <AddMenuItem link={pages.links.dialogsPage} title={pages.titles.dialogsPage}/>
      <AddMenuItem link={pages.links.usersPage} title={pages.titles.usersPage}/>
      {
        !isAuth
          ? <AddMenuItem link={pages.links.authPage} title={pages.titles.authPage}/>
          : <div>
            <p style={{marginLeft: 20}} className="menu__item--link">{email}</p>
            <button onClick={logout}>Logout</button>
          </div>
      }
      <button onClick={showModal} className="menu__item--button">Add</button>
    </nav>
  )
}