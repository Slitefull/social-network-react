import {connect} from 'react-redux';
import {NewUser} from './NewUser';
import {followAC, unFollowAC} from '../../../redux/users-reducer';


const mapDispatchToProps = {
  follow: userId => followAC(userId),
  unfollow: userId => unFollowAC(userId),
}

export const NewUserContainer = connect(null, mapDispatchToProps)(NewUser)
