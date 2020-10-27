import {connect} from "react-redux";
import {ProfileCardBodyComponent} from "./ProfileCardBodyComponent";
import {updateStatus} from "../../../redux/profile-reducer";

const mapStateToProps = state => ({profile: state.profilePage.profile, status: state.profilePage.status})

export const ProfileCardBodyContainer = connect(mapStateToProps, {updateStatus})(ProfileCardBodyComponent)