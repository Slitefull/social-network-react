import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching } from '../../redux/users-reducer';
import { getUsers } from '../../api/api';

import { Users } from './Users';


class UsersWrapper extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items)
      })
  }

  render() {
    return <Users users = { this.props.users }
                  totalUsersCount = { this.props.totalUsersCount }
                  onPageChanged = { this.onPageChanged }
                  pageSize = { this.props.pageSize }
                  isFetching = { this.props.isFetching } />
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export const UsersContainer = connect(mapStateToProps, { setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersWrapper)
export { Preloader } from '../../components/preloader/Preloader';
export { NewUserContainer } from './new-user';