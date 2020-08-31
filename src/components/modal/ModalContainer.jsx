import { isModalCreator, addFilmCreator, updateNewFilmLogoCreator, updateNewFilmTitleCreator,updateNewFilmYearCreator } from '../../redux/index';
import { Modal } from "../index";
import { connect } from "react-redux";

const mapStateToProps = state => ({
        filmTitleText: state.generalPage.filmTitleText,
        filmYearText: state.generalPage.filmYearText,
        filmPictureText: state.generalPage.filmPictureText
})

const mapDispatchToProps = {
    hideModal: () => isModalCreator(),
    addFilm: () => addFilmCreator(),
    onFilmLogoChange: filmLogoValue => updateNewFilmLogoCreator(filmLogoValue),
    onFilmTitleChange: filmTitleValue => updateNewFilmTitleCreator(filmTitleValue),
    onFilmYearChange: filmYearValue => updateNewFilmYearCreator(filmYearValue)
}

export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal)