import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import General from "./General/General";
import Modal from "./Modal/Modal";
import Dialogs from "./Dialogs/Dialogs";
import Footer from "./Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route path='/general' render={ () => <General state={ props.state.generalPage }/> }/>
                <Route path='/dialogs' render={ () => <Dialogs state={ props.state.dialogsPage } addMessage={ props.addMessage } /> }/>
                <Modal/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;