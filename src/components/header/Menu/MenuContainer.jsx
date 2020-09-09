import { connect } from "react-redux";
import {modalToggle} from '../../../redux/modal-window-reducer';
import {Menu} from './Menu';

export const MenuContainer = connect(null,{ modalToggle })(Menu)
