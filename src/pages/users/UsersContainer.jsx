import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching } from '../../redux/users-reducer';
import { Users } from './Users';

export class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
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

export default connect(mapStateToProps, { setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer)
