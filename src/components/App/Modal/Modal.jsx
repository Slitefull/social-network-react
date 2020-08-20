import React from 'react';

import { addFilmCreator, isModalCreator } from "../../../redux/state";

import './Modal.scss';


const filmTitle = React.createRef();
const filmYear = React.createRef();
const filmPicture = React.createRef();

const hideModal = dispatch => {
    const action = isModalCreator();
    dispatch(action);
}

const addFilm = dispatch => {
    const action = addFilmCreator();
    dispatch(action);
}

export const Modal = ({ state, dispatch }) => {
    const { filmTitleText, filmYearText, filmPictureText } = state;

    return (
        <div className = "modal">
            <div className = "modal-wrapper">
                <div className = "modal-wrapper__header">
                    <div onClick = { () => hideModal(dispatch) } className = "modal-wrapper__header__close__button">×</div>
                    <h2 className = "modal-wrapper__header__title">Add a new film</h2>
                </div>
                <div className = "modal-wrapper__item">
                    <p className = "modal-wrapper__item__title">Enter film title</p>
                    <input className = "modal-wrapper__item__input" ref={ filmTitle } value={ filmTitleText } type = "text"/>
                </div>
                <div className = "modal-wrapper__item">
                    <p className = "modal-wrapper__item__title">Enter film title</p>
                    <input className = "modal-wrapper__item__input" ref={ filmYear } value = { filmYearText } type = "text"/>
                </div>
                <div className = "modal-wrapper__item">
                    <p className = "modal-wrapper__item__title">Enter film title</p>
                    <input className = "modal-wrapper__item__input" ref = { filmPicture } value = { filmPictureText } type = "text"/>
                </div>
                <div className = "modal-wrapper__footer">
                    <button onClick={ ()=> addFilm(dispatch) } className = "modal-wrapper__footer__button">Add</button>
                </div>
            </div>
        </div>
    )
}
