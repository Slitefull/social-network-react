import { connect } from "react-redux";

import { Menu } from "../../index";
import { isModalCreator } from "../../../redux";

const mapDispatchToProps = { showModal: () => isModalCreator() }

export const MenuContainer = connect(null,mapDispatchToProps)(Menu)