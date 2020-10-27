import {connect} from "react-redux";
import {ProfileCardSocialComponent} from "./ProfileCardSocialComponent";

const mapStateToProps = state => {
  return {
    contacts: state.profilePage.profile.contacts
  }
}

export const ProfileCardSocialContainer = connect(mapStateToProps)(ProfileCardSocialComponent)