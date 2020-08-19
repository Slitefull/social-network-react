import React from 'react';
import './Films.scss';

const AddFilm = props => {
    return (
        <section className="film">
            <div className="film__image">
                <img className="film__image--avatar" src={ props.logoUrl } alt="Film"/>
            </div>
            <div className="film__description">
                <h3 className="film__description--item">Заголовок: { props.title }</h3>
                <p className="film__description--item">Год: { props.year }</p>
            </div>
        </section>
    );
}

const Films = ({ films }) => films.map( f => <AddFilm { ...f }/> )

export default Films;