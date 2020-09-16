import React from 'react';
import { connect } from "react-redux";
import * as axios from 'axios';

import {modalToggle} from '../../../redux/modal-window-reducer';
import {setAuthUserData} from '../../../redux/auth-reducer';

import { Menu } from './Menu';


class MenuWrapper extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email);
        }
      })
  }

  render() { return <Menu { ...this.props } showModal = { this.props.modalToggle } /> }
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth, email: state.auth.email })

export const MenuContainer = connect(mapStateToProps, { modalToggle, setAuthUserData })(MenuWrapper)