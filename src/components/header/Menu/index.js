import React from 'react';
import { connect } from "react-redux";

import {modalToggle} from '../../../redux/modal-window-reducer';
import {setAuthUserData} from '../../../redux/auth-reducer';

import { authAPI } from '../../../api/api';
import { Menu } from './Menu';


class MenuWrapper extends React.Component {
  componentDidMount() {
    authAPI.setAccount()
      .then(data => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          this.props.setAuthUserData(id, login, email);
        }
      })
  }

  render() { return <Menu { ...this.props } showModal = { this.props.modalToggle } /> }
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth, email: state.auth.email })

export const MenuContainer = connect(mapStateToProps, { modalToggle, setAuthUserData })(MenuWrapper)