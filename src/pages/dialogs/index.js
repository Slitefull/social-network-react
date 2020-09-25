import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { Dialogs } from './Dialogs';

export { DialogsUsersContainer } from './dialogs-users';
export { DialogsMessagesContainer } from './dialogs-messages';

const mapStateToProps = state => { return { isAuth: state.auth.isAuth } }

const AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent)