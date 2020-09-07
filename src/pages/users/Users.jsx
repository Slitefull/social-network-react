import React from 'react';
import {NewUserContainer} from './new-user/NewUserContainer';
import {Pagination} from './styled';

import './Users.scss'


export const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) { pages.push(i); }

  return(
    <main className="users-page">
      { props.users.map(u => <NewUserContainer key = { u.key } {...u} />) }
      { pages.map(p => { return <Pagination isRed = { false } onClick={ (e) => props.onPageChanged(p) }> { p } </Pagination> })}
    </main>
  )
}
