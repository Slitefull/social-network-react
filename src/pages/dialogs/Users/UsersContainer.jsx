import { Users } from "./Users";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        users: state.dialogsPage.users
    }
}

export const UsersContainer = connect(mapStateToProps)(Users)