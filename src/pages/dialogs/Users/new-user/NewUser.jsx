import React from "react";

import { addUserCreator, updateNewUserNameCreator } from '../../../../redux/state';


export const NewUser = ({ newUserName, dispatch }) => {
    const dialogsUser = React.createRef();

    const addUser = () => {
        const action = addUserCreator();
        dispatch(action);
    }

    const onUserChange = () => {
        const userName = dialogsUser.current.value;
        const action = updateNewUserNameCreator(userName);
        dispatch(action);
    }

    return (
        <div className = "new-user">
            <p className = "new-user__name">Add user</p>
            <input className = "new-user__input" ref = { dialogsUser } onChange = { onUserChange } value = { newUserName } type = "text" />
            <button onClick = { addUser } className = "new-user__button">Add</button>
        </div>
    );
}
