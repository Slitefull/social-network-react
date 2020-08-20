import React from 'react';
import { Route } from "react-router-dom";

import { Modal, Header, General, Dialogs, Footer } from './index';

import './App.scss';


export const App = ({ dispatch, state }) => {
    const { generalPage, dialogsPage, modalWindow } = state;
    const { isModal } = modalWindow;

    return (
        <div className = "App">
            <Header dispatch = { dispatch } />
            <Route path = "/general" render = { () => <General state = { generalPage }/> } />
            <Route path = "/dialogs" render = { () => <Dialogs state = { dialogsPage } dispatch = { dispatch }/> } />
            { isModal && <Modal state = { { modalWindow, generalPage } } dispatch = { dispatch } /> }
            <Footer />
        </div>
    )
}