import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {generalReducer} from './pages/general/general-reducer';
import {modalWindowReducer} from './components/modal/modal-window-reducer';
import {usersReducer} from './pages/users/users-reducer';
import {dialogsReducer} from './pages/dialogs/dialogs-reducer';
import {profileReducer} from './pages/profile/profile-reducer';
import {authReducer} from './pages/login/auth-reducer';
import {reducer as formReducer} from 'redux-form';
import {appReducer} from "./app/app-reducer";

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

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f));

window.store = store;

export default store;
