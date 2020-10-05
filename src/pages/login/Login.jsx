import React from 'react';
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit = { props.handleSubmit }>
      <div>
        <Field name = {'login'} component={'input'} placeholder={'Login'}/>
      </div>
      <div>
        <Field name = {'password'} component={'input'} placeholder={'Password'}/>
      </div>
      <div>
        <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>Remember Me
      </div>
      <button>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export const Login = () => {
  const onSubmit = dataForm => {
    console.log(dataForm)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
