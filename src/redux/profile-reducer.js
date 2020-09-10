const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [],
  profile: null,
  newPostText: 'Max',
}

export const profileReducer = (state = initialState, action) => {
  switch (action){
    case SET_USER_PROFILE: return { ...state, profile: action.profile }

    default: return state
  }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
