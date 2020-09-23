import React from 'react';
import { connect } from "react-redux";

import { modalToggle } from '../../../redux/modal-window-reducer';
import { setAccountTC, setAuthUserData} from '../../../redux/auth-reducer';

import { Menu } from './Menu';


class MenuWrapper extends React.Component {
  componentDidMount() { this.props.setAccountTC() }

  render() { return <Menu { ...this.props } showModal = { this.props.modalToggle } /> }
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth, email: state.auth.email })

export const MenuContainer = connect(mapStateToProps, { modalToggle, setAuthUserData, setAccountTC })(MenuWrapper)