import React from 'react';
import { pages } from '../consts';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToPropsForRedirect = state => ({ isAuth: state.auth.isAuth })

export const withAuthRedirect = Component => {
  const RedirectComponent = props => {
    if (!props.isAuth) return <Redirect to = { pages.links.authPage } />
    return <Component {...props} />
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}