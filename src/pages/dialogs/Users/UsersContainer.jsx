import { Users } from "./Users";
import { connect } from "react-redux";

const mapStateToProps = state => ({ users: state.dialogsPage.users })

export const UsersContainer = connect(mapStateToProps)(Users)