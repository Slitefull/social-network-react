import { DialogsMessages } from "../index";
import { connect } from "react-redux";

const mapStateToProps = state => ({ messages: state.dialogsPage.messages })

export const DialogsMessagesContainer = connect(mapStateToProps)(DialogsMessages)
