import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollowingProgress,
  toggleIsFetching,
  unFollow
} from '../../redux/users-reducer';
import {usersAPI} from '../../api/api';

import {Users} from './Users';


class UsersWrapper extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items)
      this.props.setTotalUsersCount(data.totalCount)
    })
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items)
      })
  }

  render() {
    return <Users users={this.props.users}
                  totalUsersCount={this.props.totalUsersCount}
                  onPageChanged={this.onPageChanged}
                  pageSize={this.props.pageSize}
                  isFetching={this.props.isFetching}
                  toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export const UsersContainer = connect(mapStateToProps, {
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  follow,
  toggleFollowingProgress,
  unFollow
})(UsersWrapper)
export {Preloader} from '../../components/preloader/Preloader';