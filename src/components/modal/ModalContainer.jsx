import { connect } from "react-redux";
import { Modal } from "../index";
import {modalToggle} from '../../redux/modal-window-reducer';
import {addFilm, updateNewFilmLogo, updateNewFilmTitle, updateNewFilmYear} from '../../redux/general-reducer';


const mapStateToProps = state => ({
        filmTitleText: state.generalPage.filmTitleText,
        filmYearText: state.generalPage.filmYearText,
        filmPictureText: state.generalPage.filmPictureText
})

export const ModalContainer = connect(mapStateToProps, { modalToggle, addFilm, updateNewFilmLogo, updateNewFilmTitle, updateNewFilmYear })(Modal)
