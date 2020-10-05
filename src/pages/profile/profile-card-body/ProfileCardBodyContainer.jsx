import {connect} from "react-redux";
import {ProfileCardBodyWrapper} from "./ProfileCardBody";
import {updateStatus} from "../../../redux/profile-reducer";


const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export const ProfileCardBodyContainer = connect(mapStateToProps, {updateStatus})(ProfileCardBodyWrapper)