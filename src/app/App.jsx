import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {pages} from '../consts';
import {Footer, General, Header, ModalContainer, ProfileContainer, UsersContainer} from './index';
import {DialogsContainer} from '../pages/dialogs';
import {LoginContainer} from '../pages/login/Login';
import {Preloader} from "../components/common/preloader/Preloader";
import './App.scss';


export const App = ({isModal, initialized, initializeApp}) => {
  useEffect(() => initializeApp(), [initializeApp])

  if (!initialized) {
    return <Preloader/>
  }

  return (
    <div className="App">
      <Header/>
      <Route path={pages.links.generalPage} component={General}/>
      <Route path={pages.links.profilePageRoute} component={ProfileContainer}/>
      <Route path={pages.links.dialogsPage} component={DialogsContainer}/>
      <Route path={pages.links.usersPage} component={UsersContainer}/>
      <Route path={pages.links.authPage} component={LoginContainer}/>
      {isModal && <ModalContainer/>}
      <Footer/>
    </div>
  )
}