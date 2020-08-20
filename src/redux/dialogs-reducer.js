const ADD_POST = 'ADD_POST';
const ADD_USER = 'ADD_USER';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_USER_NAME = 'UPDATE_NEW_USER_NAME';

export const dialogsReducer = (state, action) => {
    if (action.type === ADD_POST) {
        const newMessage = {
            id: 6,
            message:
            state.newMessageText
        };
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === ADD_USER) {
        const newUser = {id: 6, name: this._state.dialogsPage.newUserName}
        state.users.push(newUser);
        state.newUserName = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newMessageText = action.newText;
    } else if (action.type === UPDATE_NEW_USER_NAME) {
        this._state.dialogsPage.newUserName = action.newUser;
    }

    return state;
}