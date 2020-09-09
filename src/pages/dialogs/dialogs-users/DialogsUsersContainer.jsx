import { connect } from 'react-redux';
import { DialogsUsers } from './DialogsUsers';


const mapStateToProps = state => ({ users: state.dialogsPage.users })

export const DialogsUsersContainer = connect(mapStateToProps)(DialogsUsers)
