const ADD_POST = 'ADD_POST';
const ADD_USER = 'ADD_USER';

const initialState = {
  users: [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Sanya' },
    { id: 3, name: 'Ivan' },
    { id: 4, name: 'Dimon' },
    { id: 5, name: 'Oleg' },
  ],

  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Hello!' },
    { id: 3, message: 'Darova' },
    { id: 4, message: 'React' },
    { id: 5, message: 'Redux' },
  ]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: { return { ...state, messages: [...state.messages, { id: 6, message: action.message }] } }
        case ADD_USER: { return { ...state, users: [...state.users, { id: 6, name: action.user }] } }

        default: return state;
    }
}

export const addPostAC = message => ({ type: ADD_POST, message });
export const addUserAC = user => ({ type: ADD_USER, user });