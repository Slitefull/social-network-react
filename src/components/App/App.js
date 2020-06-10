import React from 'react';
import './app.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
