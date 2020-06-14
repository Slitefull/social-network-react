import React from 'react';
import './Film.scss';
import LikeButton from "./LikeButton/LikeButton";

const Film = () => {
    return (
        <section className="film">
            <div className="film__image">
                <img className="film__image--avatar"
                     src="https://ru.meming.world/images/ru/thumb/7/73/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg/300px-%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg"
                     alt="Cat"/>
            </div>
            <div className="film__description">
                <h3 className="film__description--item">Film Title: </h3>
                <p className="film__description--item">Film Year: </p>
            </div>
            {/*<LikeButton/>*/}
        </section>
    );
}

export default Film;