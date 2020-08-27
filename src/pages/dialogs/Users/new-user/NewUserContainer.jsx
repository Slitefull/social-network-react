import React from "react";

import { addUserCreator, updateNewUserNameCreator } from '../../../../redux/index';
import { NewUser } from "../../../index";


export const NewUserContainer = ({ store }) => {
    const state = store.getState();

    const { dialogsPage } = state;
    const { newUserName } = dialogsPage;
    const { dispatch } = store;

    const addUser = () => { dispatch(addUserCreator()) }

    const onUserChange = userName => { dispatch(updateNewUserNameCreator(userName)) }

    return <NewUser addUser = { addUser } updateNewUserNameCreator = { onUserChange } newUserName = { newUserName } />
}