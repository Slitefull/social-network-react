import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import General from "./General/General";
import Modal from "./Modal/Modal";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./Footer/Footer";

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