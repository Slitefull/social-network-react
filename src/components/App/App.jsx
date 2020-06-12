import React from 'react';
import './App.scss';
import Header from "./Header/Header.jsx";
import General from "./General/General.jsx";
import Modal from "./Modal/Modal";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./Footer/Footer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route path='/general' component={General}/>
                <Route path='/modal' component={Modal}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;