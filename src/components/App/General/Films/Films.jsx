import React from 'react';
import './Films.scss';

const AddFilm = (props) => {
    return (
        <section className="film">
            <div className="film__image">
                <img className="film__image--avatar"
                     src={props.logoUrl}
                     alt="Image"/>
            </div>
            <div className="film__description">
                <h3 className="film__description--item">Film Title: {props.title}</h3>
                <p className="film__description--item">Film Year: {props.year}</p>
            </div>
        </section>
    );
}

const Films = () => {

    let films = [
        {
            logoUrl: 'https://ru.meming.world/images/ru/thumb/7/73/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg/300px-%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg',
            title: "Плачущий кот",
            year: 2000
        },
        {
            logoUrl: 'https://r3.mt.ru/r20/photo57F6/20082594506-0/png/bp@2x.webp',
            title: "Кричащий кот",
            year: 2001
        },
        {
            logoUrl: 'https://ru.meming.world/images/ru/thumb/7/78/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82_3.jpg/300px-%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82_3.jpg',
            title: "Грустный кот",
            year: 2002
        },
        {
            logoUrl: 'https://www.meme-arsenal.com/memes/211bcdd033fcb439f9c11839945fdd97.jpg',
            title: "Кот в слезах",
            year: 2003
        },
    ]

    let filmsElements = films.map(f => <AddFilm logoUrl={f.logoUrl} title={f.title} year={f.year}/>)

    return (
        <>
            {filmsElements}
        </>
    );
}

export default Films;