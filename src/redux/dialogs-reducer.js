const ADD_POST = 'ADD_POST';
const ADD_USER = 'ADD_USER';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_USER_NAME = 'UPDATE_NEW_USER_NAME';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
            return { ...state, messages: [...state.messages, { id: 6, message: state.newMessageText }], newMessageText: '',}
        }
        case ADD_USER: {
            return { ...state, users: [...state.users, { id: 6, name: state.newUserName }], newUserName: '', }
        }
        case UPDATE_NEW_POST_TEXT: return { ...state, newMessageText: action.newText }
        case UPDATE_NEW_USER_NAME: return { ...state, newUserName: action.newUser }

        default: return state;
    }
}