import React from 'react';
import userPhoto from '../../../assets/images/kuchma.jpg';

export const NewUser = props => (
  <main className="users-page">
    <div className="user">
      <div className="user__header">
        <div className="user__header__avatar">
          <img className="user__header__avatar__image" src={props.photos.small != null ? props.photos.small : userPhoto}
               alt={props.name}/>
        </div>
      </div>
      <div className="user__body">
        <p className="user__body__name">{props.name}</p>
        <p className="user__body__location">{'location.country'} | {'location.city'}</p>
      </div>
      <div className="user__bottom">
        <div className="user__bottom__status">
          <span className="user__bottom__status__title">Status: </span> {props.status}
        </div>
        {props.isFollow
          ? <button onClick={() => props.follow(props.id)} className="user__bottom__button">Unfollow</button>
          : <button onClick={() => props.unfollow(props.id)} className="user__bottom__button">Follow</button>}
      </div>
    </div>
    )
  </main>
)
