import React from 'react';
import {connect} from 'react-redux';
import { follow, unFollow, getUsers, setCurrentPage, setTotalUsersCount } from '../../redux/users-reducer';

import {Users} from './Users';


class UsersWrapper extends React.Component {
  componentDidMount() { this.props.getUsers(this.props.currentPage, this.props.pageSize) }

  onPageChanged = pageNumber => { this.props.getUsers(pageNumber, this.props.pageSize) }

  render() {
    return <Users users={this.props.users}
                  onPageChanged={this.onPageChanged}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  followingInProgress={this.props.followingInProgress}
                  follow={this.props.follow}
                  unFollow={this.props.unFollow} />
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export const UsersContainer = connect(mapStateToProps, { setCurrentPage, setTotalUsersCount, getUsers, follow, unFollow })(UsersWrapper)
export { Preloader } from '../../components/preloader/Preloader';