import React from 'react';
import {connect} from 'react-redux';
import {follow, unFollow, requestUsers, setCurrentPage, setTotalUsersCount} from './users-reducer';

import {Users} from './Users';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "./users-selectors";


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

const mapStateToProps = state => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  followingInProgress: getFollowingInProgress(state)
})

export const UsersContainer = compose(connect(mapStateToProps, {
  setCurrentPage,
  setTotalUsersCount,
  getUsers: requestUsers,
  follow,
  unFollow
}), withAuthRedirect)(UsersWrapper)

export {Preloader} from '../../components/common/preloader/Preloader';