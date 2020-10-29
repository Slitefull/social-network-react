import { connect } from 'react-redux';
import {compose} from "redux";
import { App } from './App';
import {initializeApp} from "../redux/app-reducer";
import {withRouter} from 'react-router-dom';
import {getInitialized} from "../redux/app-selectors";
import {getIsModal} from "../redux/modal-window-selectors";

const mapStateToProps = state => ({
  isModal: getIsModal(state),
  initialized: getInitialized(state)
})

export const AppContainer = compose(connect(mapStateToProps, {initializeApp}), withRouter)(App)

export { Header } from '../components/header/Header';
export { Modal } from '../components/modal/Modal';
export { General } from '../pages/general/General';
export { Profile } from '../pages/profile/Profile';
export { Footer } from '../components/footer/Footer';
export { Dialogs } from '../pages/dialogs/Dialogs';

export { ProfileContainer } from '../pages/profile';
export { UsersContainer } from '../pages/users';
export { ModalContainer } from '../components/modal';