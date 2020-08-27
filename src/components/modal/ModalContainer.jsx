import React from 'react';

import { isModalCreator, addFilmCreator, updateNewFilmLogoCreator, updateNewFilmTitleCreator,updateNewFilmYearCreator } from '../../redux/index';

import { Modal } from "../index";

export const ModalContainer = ({ store }) => {
    const state = store.getState();

    const { dispatch } = store;
    const { generalPage } = state;
    const { filmTitleText, filmYearText, filmPictureText } = generalPage;

    const hideModal = () => { dispatch(isModalCreator()) }

    const addFilm = () => { dispatch(addFilmCreator()) }

    const onFilmLogoChange = filmLogoValue => { dispatch(updateNewFilmLogoCreator(filmLogoValue)) }

    const onFilmTitleChange = filmTitleValue => { dispatch(updateNewFilmTitleCreator(filmTitleValue)) }

    const onFilmYearChange = filmYearValue => { dispatch(updateNewFilmYearCreator(filmYearValue)) }

    return <Modal actions = {{ addFilm, hideModal, onFilmYearChange, onFilmTitleChange, onFilmLogoChange }} state = {{ filmTitleText, filmYearText, filmPictureText }} />
}