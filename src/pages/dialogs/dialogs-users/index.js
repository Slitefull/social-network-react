import { connect } from 'react-redux';
import { DialogsUsers } from './DialogsUsers';

export { AddUserContainer } from './new-dialogs-user';

const mapStateToProps = state => ({ users: state.dialogsPage.users })

export const DialogsUsersContainer = connect(mapStateToProps)(DialogsUsers)