import { connect } from "react-redux";
import { modalToggle, addFilm, updateNewFilmLogo, updateNewFilmTitle, updateNewFilmYear } from '../../redux/index';
import { Modal } from "../index";


const mapStateToProps = state => ({
        filmTitleText: state.generalPage.filmTitleText,
        filmYearText: state.generalPage.filmYearText,
        filmPictureText: state.generalPage.filmPictureText
})

export const ModalContainer = connect(mapStateToProps, { modalToggle, addFilm, updateNewFilmLogo, updateNewFilmTitle, updateNewFilmYear })(Modal)
