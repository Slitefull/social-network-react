const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'Darova'},
    {id: 4, message: 'React'},
    {id: 5, message: 'Redux'},
  ],
  newPostText: 'Max'
}

export const ProfileReducer = (state = initialState, action) => {
  switch (action){
    case SET_USER_PROFILE: return { ...state,  }
  }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
