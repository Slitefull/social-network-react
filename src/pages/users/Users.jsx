import React from 'react';

import {Preloader} from './index';

import {Pagination, PaginationWrapper} from './styled';

import {NavLink} from 'react-router-dom';
import userPhoto from '../../assets/images/kuchma.jpg';

import './Users.scss'


export const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <main className="users-page">
      <section className="users-page__wrapper">
        {props.isFetching ? <Preloader/> : null}
        {props.users.map(u => (
          <div className="user">
            <div className="user__header">
              <div className="user__header__avatar">
                <NavLink to={'/profile/' + u.id}>
                  <img className="user__header__avatar__image" src={u.photos.small != null ? u.photos.small : userPhoto}
                       alt={u.name}/>
                </NavLink>
              </div>
            </div>
            <div className="user__body">
              <p className="user__body__name">{u.name}</p>
            </div>
            <div className="user__bottom">
              <div className="user__bottom__status">
                <span className="user__bottom__status__title">Status: {u.status} </span>
              </div>
              {
                u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.unFollow(u.id)
                  }} className="user__bottom__button">Unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.follow(u.id)
                  }} className="user__bottom__button">Follow</button>
              }
            </div>
          </div>
        ))}
      </section>
      <PaginationWrapper>
        {pages.map(p => {
          return <Pagination key={p.key} isRed={false} onClick={() => props.onPageChanged(p)}> {p} </Pagination>
        })}
      </PaginationWrapper>
    </main>
  )
}