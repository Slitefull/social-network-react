import {connect} from "react-redux";
import {Modal} from "../index";
import {modalToggle} from './modal-window-reducer';
import {addFilm, updateNewFilmLogo, updateNewFilmTitle, updateNewFilmYear} from '../../pages/general/general-reducer';
import {getFilmPictureText, getFilmTitleText, getFilmYearText} from "../../pages/general/general-selectors";


const mapStateToProps = state => ({
  filmTitleText: getFilmTitleText(state),
  filmYearText: getFilmYearText(state),
  filmPictureText: getFilmPictureText(state)
})

export const ModalContainer = connect(mapStateToProps, {
  modalToggle,
  addFilm,
  updateNewFilmLogo,
  updateNewFilmTitle,
  updateNewFilmYear
})(Modal)