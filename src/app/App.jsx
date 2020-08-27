import React from 'react';
import { Route } from "react-router-dom";

import { ModalContainer, Header, General, Dialogs, Footer } from './index';

import './App.scss';


export const App = ({ store }) => {
    const state = store.getState();

    return (
        <div className = "App">
            <Header dispatch = { store.dispatch } />
            <Route path = "/general" render = { () => <General store = { store } /> } />
            <Route path = "/dialogs" render = { () => <Dialogs store = { store } /> } />
            { state.modalWindow.isModal && <ModalContainer store = { store } /> }
            <Footer />
        </div>
    )
}