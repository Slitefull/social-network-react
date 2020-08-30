import { isModalCreator, addFilmCreator, updateNewFilmLogoCreator, updateNewFilmTitleCreator,updateNewFilmYearCreator } from '../../redux/index';
import { Modal } from "../index";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        filmTitleText: state.filmTitleText,
        filmYearText: state.filmYearText,
        filmPictureText: state.filmPictureText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => { dispatch(isModalCreator()) },
        addFilm: () => { dispatch(addFilmCreator()) },
        onFilmLogoChange: filmLogoValue => { dispatch(updateNewFilmLogoCreator(filmLogoValue)) },
        onFilmTitleChange: filmTitleValue => { dispatch(updateNewFilmTitleCreator(filmTitleValue)) },
        onFilmYearChange: filmYearValue => { dispatch(updateNewFilmYearCreator(filmYearValue)) }
    }
}

export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal)