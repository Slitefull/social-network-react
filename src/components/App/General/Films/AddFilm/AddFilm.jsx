import React from "react";

export const AddFilm = ({ logoUrl, title, year }) => (
    <section className = "film">
        <div className = "film__image">
            <img className = "film__image--avatar" src = { logoUrl } alt = "Film" />
        </div>
        <div className = "film__description">
            <h3 className = "film__description--item">Заголовок: { title }</h3>
            <p className = "film__description--item">Год: { year }</p>
        </div>
    </section>
)