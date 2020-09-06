import {Users} from './Users';
import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from '../../redux/users-reducer';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = {
  follow: userId => followAC(userId),
  unfollow: userId => unFollowAC(userId),
  setUsers: users => setUsersAC(users),
  setCurrentPage: pageNumber => setCurrentPageAC(pageNumber),
  setTotalUsersCount: totalCount => setTotalUsersCountAC(totalCount)
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)