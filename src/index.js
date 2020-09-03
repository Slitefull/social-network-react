import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AppContainer } from './app/AppContainer';

import './index.scss';


ReactDOM.render(
  <BrowserRouter>
    <Provider store = { store }>
      <AppContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)