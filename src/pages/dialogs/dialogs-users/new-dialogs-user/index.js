import {connect} from "react-redux";

import {addUserAC} from '../../../../redux/dialogs-reducer';
import {AddUser} from './AddUser';


const mapStateToProps = state => ({
  newUserName: state.dialogsPage.newUserName
})

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => {
      dispatch(addUserAC(user))
    }
  }
}

export const AddUserContainer = connect(mapStateToProps, mapDispatchToProps)(AddUser)