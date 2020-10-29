import React from 'react';
import {Route} from 'react-router-dom';
import {pages} from '../consts';
import {ModalContainer, ProfileContainer, UsersContainer, Header, Footer, General} from './index';
import {DialogsContainer} from '../pages/dialogs';
import {LoginContainer} from '../pages/login/Login';

import './App.scss';
import {Preloader} from "../components/common/preloader/Preloader";

export class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    let {isModal, initialized} = this.props;

    if (!initialized){
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
}