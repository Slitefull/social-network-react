import { addUserCreator, updateNewUserNameCreator } from '../../../../redux/index';
import { NewProfileUser } from '../../index';
import { connect } from "react-redux";

const mapStateToProps = state => ({ newUserName: state.dialogsPage.newUserName })

const mapDispatchToProps = {
    addUser: () => addUserCreator(),
    onChangeHandler: userName => updateNewUserNameCreator(userName)
}

export const NewProfileUserContainer = connect(mapStateToProps, mapDispatchToProps)(NewProfileUser)

