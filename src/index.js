import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import store from './redux/redux-store';
import { App } from './app/App';

import './index.scss';


const rerenderTree =  state  => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = { state } dispatch = { store.dispatch.bind(store) } />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderTree( store.getState() );

store.subscribe(()=> {
    const state = store.getState();
    rerenderTree(state);
} );