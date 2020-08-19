import React from 'react';

import { Header } from "./Header/Header";
import { General } from "./General/General";
import { Modal } from "./Modal/Modal";
import { Dialogs } from "./Dialogs/Dialogs";
import { Footer } from "./Footer/Footer";
import { Route } from "react-router-dom";

import './App.scss';


export const App = ({ dispatch, state }) => {
    const { generalPage, dialogsPage, isModal } = state;

    return (
        <div className="App">
            <Header dispatch = { dispatch } />
            <Route path='/general' render={ () => <General state = { generalPage }/> } />
            <Route path='/dialogs' render={ () => <Dialogs state = { dialogsPage } dispatch = { dispatch }/> } />
            { isModal && <Modal dispatch = { dispatch } /> }
            <Footer/>
        </div>
    );
}