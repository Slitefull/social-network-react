import {connect} from "react-redux";
import {ProfileCardSocialWrapper} from "./ProfileCardSocial";


const mapStateToProps = state => ({
  profile: state.profilePage.profile
})

export const ProfileCardSocialContainer = connect(mapStateToProps)(ProfileCardSocialWrapper)