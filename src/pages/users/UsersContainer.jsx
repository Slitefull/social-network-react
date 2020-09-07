import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from '../../redux/users-reducer';
import {Users} from './Users';

export class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <Users users = { this.props.users }
                  totalUsersCount = { this.props.totalUsersCount }
                  onPageChanged={ this.onPageChanged }
                  pageSize = { this.props.pageSize } />
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = {
  setUsers: users => setUsersAC(users),
  setCurrentPage: pageNumber => setCurrentPageAC(pageNumber),
  setTotalUsersCount: totalCount => setTotalUsersCountAC(totalCount)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
