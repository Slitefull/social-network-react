import { connect } from "react-redux";
import { AddUser } from '../../index';
import {addUser, onUserNameChangeHandler} from '../../../../redux/dialogs-reducer';


const mapStateToProps = state => ({ newUserName: state.dialogsPage.newUserName })

export const AddUserContainer = connect(mapStateToProps, { addUser, onUserNameChangeHandler })(AddUser)
