import React from 'react';
import {connect} from "react-redux";

import {modalToggle} from '../../../redux/modal-window-reducer';
import {setAuthUserData, logout} from '../../../redux/auth-reducer';

import {Menu} from './Menu';


function MenuWrapper(props) {
  return <Menu {...props} showModal={props.modalToggle}/>
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth, email: state.auth.email})

export const MenuContainer = connect(mapStateToProps, {modalToggle, setAuthUserData, logout})(MenuWrapper)