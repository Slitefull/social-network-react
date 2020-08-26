import React from "react";

import { addUserCreator, updateNewUserNameCreator } from '../../../../redux/index';
import { NewUser } from "../../../index";


export const NewUserContainer = ({ dispatch, newUserName }) => {
    const addUser = () => { dispatch(addUserCreator()) }

    const onUserChange = userName => { dispatch(updateNewUserNameCreator(userName)) }

    return <NewUser addUser = { addUser } updateNewUserNameCreator = { onUserChange } newUserName = { newUserName } />
}