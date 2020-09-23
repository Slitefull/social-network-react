import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {...state, ...action.data, isAuth: true}
    }
    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const setAccountTC = () => {
  return dispatch => {
    authAPI.getAccountData()
      .then(({data}) => data.resultCode === 0 && dispatch(setAuthUserData(...Object.values(data.data))))
  }
}