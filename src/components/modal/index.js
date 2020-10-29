import {connect} from "react-redux";
import {Modal} from "../index";
import {modalToggle} from '../../redux/modal-window-reducer';
import {addFilm, updateNewFilmLogo, updateNewFilmTitle, updateNewFilmYear} from '../../redux/general-reducer';
import {getFilmPictureText, getFilmTitleText, getFilmYearText} from "../../redux/general-selectors";


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