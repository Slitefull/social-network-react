import React from 'react';
import { NewUserContainer } from './new-user/NewUserContainer';
import { Preloader } from '../../components/preloader/Preloader';
import { Pagination } from './styled';

import './Users.scss'


export const Users = ({ totalUsersCount, pageSize, users, onPageChanged, isFetching }) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize)

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) { pages.push(i) }

  return (
    <main className = "users-page">
      { isFetching ? <Preloader /> : null }
      { users.map(u => <NewUserContainer key = { u.key } {...u} />) }
      { pages.map(p => { return <Pagination isRed = { false } onClick = { () => onPageChanged(p) }> { p } </Pagination> }) }
    </main>
  )
}
