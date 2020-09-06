import React from 'react';
import userPhoto from '../../assets/images/kuchma.jpg';
import * as axios from 'axios';
import './Users.scss'
import {Pagination} from './styled';


export class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${ this.props.pageSize }`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${ this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <main className="users-page">
      {pages.map(p => {
        return <Pagination isRed={false} className="test" onClick={ (e) => this.onPageChanged(p) }> { p } </Pagination>
      })}

      {this.props.users.map(u =>
        <div className="user">
          <div className="user__header">
            <div className="user__header__avatar">
              <img className="user__header__avatar__image" src={u.photos.small != null ? u.photos.small : userPhoto}
                   alt={u.name}/>
            </div>
          </div>
          <div className="user__body">
            <p className="user__body__name">{u.name}</p>
            <p className="user__body__location">{'u.location.country'} | {'u.location.city'}</p>
          </div>
          <div className="user__bottom">
            <div className="user__bottom__status">
              <span className="user__bottom__status__title">Status: </span> {u.status}
            </div>
            {u.isFollow
              ? <button onClick={() => this.props.follow(u.id)} className="user__bottom__button">Unfollow</button>
              : <button onClick={() => this.props.unfollow(u.id)} className="user__bottom__button">Follow</button>}
          </div>
        </div>)
      }
    </main>
  }
}