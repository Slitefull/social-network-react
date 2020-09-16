import { connect } from "react-redux";

import { addUser, onUserNameChangeHandler } from '../../../../redux/dialogs-reducer';
import { AddUser } from './AddUser';


const mapStateToProps = state => ({ newUserName: state.dialogsPage.newUserName })

export const AddUserContainer = connect(mapStateToProps, { addUser, onUserNameChangeHandler })(AddUser)