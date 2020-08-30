import { Messages } from "./Messages";
import { connect } from "react-redux";

const mapStateToProps = state => { return { messages: state.dialogsPage.messages } }

export const MessagesContainer = connect(mapStateToProps)(Messages)