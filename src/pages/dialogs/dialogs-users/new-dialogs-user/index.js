import {connect} from "react-redux";

import {addUser} from '../../dialogs-reducer';
import {AddUser} from './AddUser';

const mapDispatchToProps = dispatch => { return { addUser: user => dispatch(addUser(user)) } }

export const AddUserContainer = connect(null, mapDispatchToProps)(AddUser)