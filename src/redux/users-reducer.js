const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
  users: [
    { id: 1, isFollow: true, avatar: 'https://test/test.png', name: 'Max', location: { country: 'Ukraine', city: 'Kyiv' }, status: 'Zaebavsya'},
    { id: 2, isFollow: true, avatar: 'https://test/test.png', name: 'Max', location: { country: 'Ukraine', city: 'Kyiv' }, status: 'Zaebavsya'},
    { id: 3, isFollow: true, avatar: 'https://test/test.png', name: 'Max', location: { country: 'Ukraine', city: 'Kyiv' }, status: 'Zaebavsya'},
    { id: 4, isFollow: true, avatar: 'https://test/test.png', name: 'Max', location: { country: 'Ukraine', city: 'Kyiv' }, status: 'Zaebavsya'},
  ],
}

export const usersReducer = ( state = initialState, action ) => {
  switch (action.type){

    default: return state
  }
}

export const followAC = () => ({ type: FOLLOW })
export const unFollowAC = () => ({ type: UNFOLLOW })