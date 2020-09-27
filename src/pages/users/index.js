import React from 'react';
import {connect} from 'react-redux';
import {follow, unFollow, getUsers, setCurrentPage, setTotalUsersCount} from '../../redux/users-reducer';

import {Users} from './Users';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


class UsersWrapper extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return <Users {...this.props} onPageChanged={this.onPageChanged}/>
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

export const UsersContainer = compose(connect(mapStateToProps, {
  setCurrentPage,
  setTotalUsersCount,
  getUsers,
  follow,
  unFollow
}), withAuthRedirect)(UsersWrapper)

export {Preloader} from '../../components/preloader/Preloader';