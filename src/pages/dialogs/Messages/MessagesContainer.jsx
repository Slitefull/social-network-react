import { Messages } from "./Messages";
import { connect } from "react-redux";

const mapStateToProps = state => ({ messages: state.dialogsPage.messages })

export const MessagesContainer = connect(mapStateToProps)(Messages)