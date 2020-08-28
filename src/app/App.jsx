import React from 'react';
import { Route } from "react-router-dom";

import { ModalContainer, Header, General, Dialogs, Footer } from './index';

import './App.scss';


export const App = ({ store }) => {
    const state = store.getState();

    const { dispatch } = store;
    const { modalWindow } = state;
    const { isModal } = modalWindow;

    return (
        <div className = "App">
            <Header dispatch = { dispatch } />
            <Route path = "/general" render = { () => <General store = { store } /> } />
            <Route path = "/dialogs" render = { () => <Dialogs store = { store } /> } />
            { isModal && <ModalContainer store = { store } /> }
            <Footer />
        </div>
    )
}