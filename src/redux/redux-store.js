import { combineReducers, createStore } from 'redux';

import { generalReducer } from './general-reducer';
import { profileReducer } from './profile-reducer';
import { modalWindowReducer } from './modal-window-reducer';


const reducers = combineReducers({
    generalPage: generalReducer,
    dialogsPage: profileReducer,
    modalWindow: modalWindowReducer,
})

const store = createStore(reducers);

export default store;