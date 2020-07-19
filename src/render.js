import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import { addMessage } from "./redux/state";

export const rerenderTree = ( state ) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={ state } addMessage={ addMessage }/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}