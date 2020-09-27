import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Dialogs } from './Dialogs';

export const DialogsContainer = compose(connect(null), withAuthRedirect)(Dialogs)

export { DialogsUsersContainer } from './dialogs-users';
export { DialogsMessagesContainer } from './dialogs-messages';