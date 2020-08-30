import { addUserCreator, updateNewUserNameCreator } from '../../../../redux/index';
import { NewUser } from "../../../index";
import { connect } from "react-redux";


const mapStateToProps = state => { return { newUserName: state.newUserName } }

const mapDispatchToProps = dispatch => {
    return {
        addUser: () => { dispatch(addUserCreator()) },
        onUserChange: userName => { dispatch(updateNewUserNameCreator(userName)) }
    }
}

export const NewUserContainer = connect(mapStateToProps, mapDispatchToProps)(NewUser)