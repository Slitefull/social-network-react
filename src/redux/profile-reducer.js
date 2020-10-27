import {profileAPI} from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const ADD_POST = 'ADD_POST';

const initialState = {
  posts: [
    {id: 1, content: 'hi'},
    {id: 2, content: 'hi'},
    {id: 3, content: 'hi'},
    {id: 4, content: 'hi'},
    {id: 5, content: 'hi'},
  ],
  profile: null,
  newPostText: 'Max',
  status: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    case SET_STATUS: {
      return {...state, status: action.status}
    }

    case ADD_POST: {
      return {...state, posts: [...state.posts, {id: 7, content: action.payload}]}
    }

    default:
      return state
  }
}

export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = status => ({type: SET_STATUS, status})
export const addPost = content => ({type: ADD_POST, payload: content})

export const getStatus = (userId = 2) => {
  return dispatch => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setUserStatus(response.data))
      })
  }
}

export const updateStatus = status => {
  return dispatch => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setUserStatus(status))
        }
      })
  }
}

export const getProfileData = (userId = 2) => {
  return dispatch => {
    profileAPI.getProfileData(userId)
      .then(response => {
        dispatch(setUserProfile(response.data))
      })
  }
}
