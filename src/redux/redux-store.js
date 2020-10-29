import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { generalReducer } from './general-reducer';
import { modalWindowReducer } from './modal-window-reducer';
import { usersReducer } from './users-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { authReducer } from './auth-reducer';
import { reducer as formReducer } from 'redux-form';
import {appReducer} from "./app-reducer";

const reducers = combineReducers({
    app: appReducer,
    generalPage: generalReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    modalWindow: modalWindowReducer,
    auth: authReducer,
    form: formReducer,
})

const store = createStore( reducers, compose( applyMiddleware(thunkMiddleware),window.devToolsExtension ? window.devToolsExtension() : f => f ) );

window.store = store;

export default store;
