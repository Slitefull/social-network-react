import { connect } from "react-redux";
import { AddMessage } from '../../index';
import { addPost, onPostMessageChangeHandler } from '../../../../redux/dialogs-reducer';


const mapStateToProps = state => ({ newMessageText: state.dialogsPage.newMessageText })

export const AddMessageContainer = connect(mapStateToProps, { addPost, onPostMessageChangeHandler })(AddMessage)
