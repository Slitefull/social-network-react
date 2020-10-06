import {connect} from "react-redux";

import {AddMessage} from './AddMessage';
import {addPostAC} from '../../../../redux/dialogs-reducer';


const mapStateToProps = state => ({newMessageText: state.dialogsPage.newMessageText})

const mapDispatchToProps = dispatch => {
  return {
    addPost: message => {
      dispatch(addPostAC(message))
    }
  }
}

export const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)