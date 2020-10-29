import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {Input} from "../../components/common/form-controls/form-controls";
import {maxLengthCreator, required} from "../../helpers/validators/validators";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const maxLength30 = maxLengthCreator(30);

export const Login = ({login, isAuth}) => {
  const loginAccount = dataForm => {
    login(dataForm.email, dataForm.password, dataForm.rememberMe);
    console.log(dataForm.email, dataForm.password, dataForm.rememberMe)
  }

  if (isAuth) {
    return <Redirect to={'/profile'} />
  }

  return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={loginAccount}/>
    </div>
}

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field
        name={'email'}
        component={Input}
        placeholder={'Email'}
        validate={[required, maxLength30]}
      />
    </div>
    <div>
      <Field
        name={'password'}
        component={Input}
        placeholder={'Password'}
        type={'password'}
        validate={[required, maxLength30]}
      />
    </div>
    <div>
      <Field
        name={'rememberMe'}
        component={Input}
        type={'checkbox'}
        validate={[required]}
      />Remember Me
    </div>
    <button>Login</button>
  </form>
)

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = state => ({isAuth: state.auth.isAuth})

export const LoginContainer = connect(mapStateToProps, {login})(Login)