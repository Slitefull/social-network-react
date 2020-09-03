import { ProfileMessages } from "../index";
import { connect } from "react-redux";

const mapStateToProps = state => ({ messages: state.dialogsPage.messages })

export const ProfileMessagesContainer = connect(mapStateToProps)(ProfileMessages)