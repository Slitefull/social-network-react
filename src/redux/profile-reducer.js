import {profileAPI} from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [],
  profile: null,
  newPostText: 'Max',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }

    default:
      return state
  }
}

export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})

export const setProfileData = (userId = 2) => {
  return dispatch => {
    profileAPI.getProfileData(userId)
      .then(response => {
      dispatch(setUserProfile(response.data))
    })
  }
}