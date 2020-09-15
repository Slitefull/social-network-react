import { combineReducers, createStore } from 'redux';

import { generalReducer } from './general-reducer';
import { modalWindowReducer } from './modal-window-reducer';
import { usersReducer } from './users-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { authReducer } from './auth-reducer';


const reducers = combineReducers({
    generalPage: generalReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    modalWindow: modalWindowReducer,
    auth: authReducer,
})

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;
