import { addUser, onUserNameChangeHandler } from '../../../../redux/index';
import { NewProfileUser } from '../../index';
import { connect } from "react-redux";

const mapStateToProps = state => ({ newUserName: state.dialogsPage.newUserName })

export const NewProfileUserContainer = connect(mapStateToProps, { addUser, onUserNameChangeHandler })(NewProfileUser)
