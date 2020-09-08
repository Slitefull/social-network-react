import { connect } from "react-redux";

import { Menu } from "../../index";
import { modalToggle } from "../../../redux";

export const MenuContainer = connect(null,{ modalToggle })(Menu)
