import { connect } from "react-redux";

import { Menu } from "./Menu";
import { isModalCreator } from "../../../redux";

const mapDispatchToProps = dispatch => { return { showModal: () => { dispatch(isModalCreator()) }} }

export const MenuContainer = connect(null ,mapDispatchToProps)(Menu)