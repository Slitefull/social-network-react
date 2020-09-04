import React from 'react';

import './User.scss'


export const Users = ({ users, follow, unfollow, setUsers }) => {

if (users.length === 0){
  setUsers([
    {
      id: 1,
      isFollow: false,
      avatar: 'https://cdnimg.rg.ru/img/content/153/27/89/1_d_850.jpg',
      name: 'Batya',
      location: {country: 'Ukraine', city: 'Kyiv'},
      status: 'Zaebavsya'
    },
    {
      id: 2,
      isFollow: false,
      avatar: 'https://i2.wp.com/altereos.ru/wp-content/uploads/2019/05/Full.Metal_.Jacket.REMASTERED.1987.720p.HDDVD_.x264-SEPTiC.Rus_.mkv-00010.jpg?ssl=1',
      name: 'Ivan',
      location: {country: 'Ukraine', city: 'Kyiv'},
      status: 'Zaebavsya'
    },
    {
      id: 3,
      isFollow: false,
      avatar: 'https://s15.stc.all.kpcdn.net/share/i/12/4884877/inx960x640.jpg',
      name: 'Tesak',
      location: {country: 'Ukraine', city: 'Kyiv'},
      status: 'Zaebavsya'
    },
    {
      id: 4,
      isFollow: false,
      avatar: 'https://cs5.pikabu.ru/images/big_size_comm/2015-12_3/1449830852177610004.jpg',
      name: 'Dmitry',
      location: {country: 'Ukraine', city: 'Kyiv'},
      status: 'Zaebavsya'
    },
    {
      id: 5,
      isFollow: false,
      avatar: 'https://file.liga.net/images/general/2016/12/04/20161204052649-6969.jpg?v=1520538396',
      name: 'Ku4ma228',
      location: {country: 'Ukraine', city: 'Kyiv'},
      status: 'Zaebavsya'
    },
    {
      id: 6,
      isFollow: false,
      avatar: 'https://file.liga.net/images/general/2016/12/04/20161204052649-6969.jpg?v=1520538396',
      name: 'Ku4ma228',
      location: {country: 'Ukraine', city: 'Kyiv'},
      status: 'Zaebavsya'
    },
    {
      id: 7,
      isFollow: false,
      avatar: 'https://file.liga.net/images/general/2016/12/04/20161204052649-6969.jpg?v=1520538396',
      name: 'Ku4ma228',
      location: {country: 'Ukraine', city: 'Kyiv'},
      status: 'Zaebavsya'
    },
    {
      id: 8,
      isFollow: false,
      avatar: 'https://file.liga.net/images/general/2016/12/04/20161204052649-6969.jpg?v=1520538396',
      name: 'Ku4ma228',
      location: {country: 'Ukraine', city: 'Kyiv'},
      status: 'Zaebavsya'
    },
  ])
}

  return <main className="users-page">
    {
      users.map( u =>
      <div className="user">
        <div className="user__header">
          <div className="user__header__avatar">
            <img className="user__header__avatar__image" src = { u.avatar } alt = { u.name }/>
          </div>
        </div>
        <div className="user__body">
          <p className="user__body__name">{ u.name }</p>
          <p className="user__body__location">{ u.location.country } | { u.location.city }</p>
        </div>
        <div className="user__bottom">
          <div className="user__bottom__status">
            <span className="user__bottom__status__title">Status: </span> { u.status }
          </div>
          { u.isFollow
            ? <button onClick={ () => follow(u.id)} className="user__bottom__button">Unfollow</button>
            : <button onClick={ () => unfollow(u.id)} className="user__bottom__button">Follow</button>}
        </div>
      </div> )
    }
    </main>
}