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
            { isModal && <Modal state = { modalWindow } dispatch = { dispatch } /> }
            <Footer />
        </div>
    )
}

/*
src
    components (all general components)
        index.js -> exports !
    pages (general page, dialogs)
        index.js -> exports !
    app
        App -> replace
        index.js -> exports !
    index.js -> enter point
public
    images
    logo.svg -> images

*** Change folder's names to lowercase and without camelcase ( use just - ) ***
*** Import/Export -> ''  ***
*/