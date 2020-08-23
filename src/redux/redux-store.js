import { combineReducers, createStore } from 'redux';

import { generalReducer } from './general-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { modalWindowReducer } from './modal-window-reducer';


const reducers = combineReducers({
    generalPage: generalReducer,
    dialogsPage: dialogsReducer,
    modalWindow: modalWindowReducer,
})

const store = createStore(reducers);

export default store;