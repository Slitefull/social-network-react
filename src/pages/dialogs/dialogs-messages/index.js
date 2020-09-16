import { connect } from "react-redux";
import { DialogsMessages } from './DialogsMessages';


const mapStateToProps = state => ({ messages: state.dialogsPage.messages })

export const DialogsMessagesContainer = connect(mapStateToProps)(DialogsMessages)
export { AddMessageContainer } from './add-message';