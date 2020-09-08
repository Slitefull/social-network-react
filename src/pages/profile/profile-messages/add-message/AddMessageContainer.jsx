import { addPost, onPostMessageChangeHandler } from '../../../../redux/index';
import { AddMessage } from '../../index';
import { connect } from "react-redux";


const mapStateToProps = state => ({ newMessageText: state.dialogsPage.newMessageText })

export const AddMessageContainer = connect(mapStateToProps, { addPost, onPostMessageChangeHandler })(AddMessage)
