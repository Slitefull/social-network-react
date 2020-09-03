import React from "react";


export const NewProfileUser = ({ addUser, onChangeHandler, newUserName }) => {
    const dialogsUser = React.createRef();

    const onUserChange = () => {
        const userName = dialogsUser.current.value;
        onChangeHandler(userName);
    }

    return (
        <div className = "new-user">
            <p className = "new-user__name">Add user</p>
            <input className = "new-user__input" ref = { dialogsUser } onChange = { onUserChange } value = { newUserName } type = "text" />
            <button onClick = { addUser } className = "new-user__button">Add</button>
        </div>
    )
}
