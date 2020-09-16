import { connect } from 'react-redux';

import { App } from './App';

export { Header } from '../components/header/Header';
export { Modal } from '../components/modal/Modal';
export { General } from '../pages/general/General';
export { Profile } from '../pages/profile/Profile';
export { Footer } from '../components/footer/Footer';
export { Dialogs } from '../pages/dialogs/Dialogs';

export { UsersContainer } from '../pages/users';
export { ProfileContainer } from '../pages/profile';
export { ModalContainer } from '../components/modal';


const mapStateToProps = state => ({ isModal: state.modalWindow.isModal })

export const AppContainer = connect(mapStateToProps)(App)