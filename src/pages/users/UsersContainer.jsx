import { connect } from 'react-redux';
import { Users } from './Users';
import {followAC, setUsersAC, unFollowAC} from '../../redux/users-reducer';

const mapStateToProps = state => ({ users: state.usersPage.users })

const mapDispatchToProps = {
  follow: userId => followAC(userId),
  unfollow: userId => unFollowAC(userId),
  setUsers: users => setUsersAC(users),
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)