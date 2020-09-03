import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/index';
import { AddMessage } from '../../index';
import { connect } from "react-redux";


const mapStateToProps = state => ({ newMessageText: state.dialogsPage.newMessageText })

const mapDispatchToProps = {
    addPost: () => addPostCreator(),
    onChangeHandler: postMessage => updateNewPostTextCreator(postMessage)
}

export const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)