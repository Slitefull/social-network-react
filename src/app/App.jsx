import React from 'react';
import { Route } from "react-router-dom";

import { ModalContainer, Header, Dialogs, Footer } from './index';
import { GeneralContainer } from "../pages/general/GeneralContainer";

import './App.scss';


export const App = ({ isModal }) => {
    return (
        <div className = "App">
            <Header />
            <Route path = "/general" render = { () => <GeneralContainer /> } />
            <Route path = "/dialogs" render = { () => <Dialogs /> } />
            { isModal && <ModalContainer /> }
            <Footer />
        </div>
    )
}