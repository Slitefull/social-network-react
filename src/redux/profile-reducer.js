const ADD_POST = 'ADD_POST';
const ADD_USER = 'ADD_USER';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_USER_NAME = 'UPDATE_NEW_USER_NAME';

const initialState = {
  users: [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Sanya'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Dimon'},
    {id: 5, name: 'Oleg'},
  ],
  newUserName: 'Max',

  messages: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'Darova'},
    {id: 4, message: 'React'},
    {id: 5, message: 'Redux'},
  ],
  newMessageText: 'Darova'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: { return { ...state, messages: [...state.messages, { id: 6, message: state.newMessageText }], newMessageText: '', } }
        case ADD_USER: { return { ...state, users: [...state.users, { id: 6, name: state.newUserName }], newUserName: '', } }

        case UPDATE_NEW_POST_TEXT: return { ...state, newMessageText: action.newText }
        case UPDATE_NEW_USER_NAME: return { ...state, newUserName: action.newUser }

        default: return state;
    }
}


export const addPost = () => ({ type: ADD_POST });
export const addUser = () => ({ type: ADD_USER });

export const onPostMessageChangeHandler = postMessage => ({ type: UPDATE_NEW_POST_TEXT, newText: postMessage });
export const onUserNameChangeHandler = userName => ({ type: UPDATE_NEW_USER_NAME, newUser: userName });
