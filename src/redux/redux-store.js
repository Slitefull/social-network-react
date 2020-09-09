import { combineReducers, createStore } from 'redux';

import { generalReducer } from './general-reducer';
import { modalWindowReducer } from './modal-window-reducer';
import { usersReducer } from './users-reducer';
import { dialogsReducer } from './dialogs-reducer';


const reducers = combineReducers({
    generalPage: generalReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    modalWindow: modalWindowReducer,
})

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
