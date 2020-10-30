import React from 'react';
import {connect} from "react-redux";

import {modalToggle} from '../../modal/modal-window-reducer';
import {setAuthUserData, logout} from '../../../pages/login/auth-reducer';

import {Menu} from './Menu';

const MenuWrapper = props => <Menu {...props} showModal={props.modalToggle}/>

const mapStateToProps = state => ({email: state.auth.email, isAuth: state.auth.isAuth})

export const MenuContainer = connect(mapStateToProps, {modalToggle, setAuthUserData, logout})(MenuWrapper)