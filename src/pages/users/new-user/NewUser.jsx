import React from 'react';
import userPhoto from '../../../assets/images/kuchma.jpg';
import {NavLink} from 'react-router-dom';

export const NewUser = ({id, photos, name, status, isFollow, follow, unFollow}) => (
  <div className="user">
    <div className="user__header">
      <div className="user__header__avatar">
        <NavLink to = { '/profile/' + id }>
          <img className="user__header__avatar__image" src={photos.small != null ? photos.small : userPhoto}
               alt={name}/>
        </NavLink>
      </div>
    </div>
    <div className="user__body">
      <p className="user__body__name">{name}</p>
    </div>
    <div className="user__bottom">
      <div className="user__bottom__status">
        <span className="user__bottom__status__title">Status: </span> {status}
      </div>
      {isFollow
        ? <button onClick={() => follow(id)} className="user__bottom__button">Unfollow</button>
        : <button onClick={() => unFollow(id)} className="user__bottom__button">Follow</button>}
    </div>
  </div>
)
