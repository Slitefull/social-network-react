import React from 'react';

import './Modal.scss';

export const Modal = ({ actions, state }) => {
    const { filmTitleText, filmYearText, filmPictureText } = state;
    const { hideModal, addFilm, onFilmLogoChange, onFilmTitleChange, onFilmYearChange } = actions;

    const filmTitle = React.createRef();
    const filmYear = React.createRef();
    const filmLogo = React.createRef();

    const onFilmTitleChangeHandler = () => {
        const filmTitleValue = filmTitle.current.value;
        onFilmTitleChange(filmTitleValue)
    }

    const onFilmYearChangeHandler = () => {
        const filmYearValue = filmYear.current.value;
        onFilmYearChange(filmYearValue)
    }

    const onFilmLogoChangeHandler = () => {
        const filmLogoValue = filmLogo.current.value;
        onFilmLogoChange(filmLogoValue)
    }
    console.log(actions)
    return (
        <div className = "modal">
            <div className = "modal-wrapper">
                <div className = "modal-wrapper__header">
                    <div onClick = { hideModal } className = "modal-wrapper__header__close__button">×</div>
                    <h2 className = "modal-wrapper__header__title">Add a new film</h2>
                </div>
                <div className = "modal-wrapper__item">
                    <p className = "modal-wrapper__item__title">Enter film title</p>
                    <input onChange = { onFilmTitleChangeHandler } className = "modal-wrapper__item__input" ref = { filmTitle } value = { filmTitleText } type = "text"/>
                </div>
                <div className = "modal-wrapper__item">
                    <p className = "modal-wrapper__item__title">Enter film year</p>
                    <input onChange = { onFilmYearChangeHandler } className = "modal-wrapper__item__input" ref = { filmYear } value = { filmYearText } type = "text"/>
                </div>
                <div className = "modal-wrapper__item">
                    <p className = "modal-wrapper__item__title">Enter film picture URL</p>
                    <input onChange = { onFilmLogoChangeHandler } className = "modal-wrapper__item__input" ref = { filmLogo } value = { filmPictureText } type = "text"/>
                </div>
                <div className = "modal-wrapper__footer">
                    <button onClick = { addFilm } className = "modal-wrapper__footer__button">Add</button>
                </div>
            </div>
        </div>
    )
}