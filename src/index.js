import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import store from './redux/redux-store';
import { App } from './app/App';

import './index.scss';
import {Provider} from "react-redux";


const rerenderTree = ({ state })  => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = { store }>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderTree( store.getState() );

store.subscribe(()=> {
    const state = store.getState();
    rerenderTree(state);
} );