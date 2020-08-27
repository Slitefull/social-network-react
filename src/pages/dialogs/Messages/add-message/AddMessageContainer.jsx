import React from "react";

import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/index';
import { AddMessage } from '../../../index';


export const AddMessageContainer = ({ store }) => {
    const state = store.getState();

    const { dispatch } = store;
    const { dialogsPage } = state;
    const { newMessageText } = dialogsPage;

    const addPost = () => { dispatch(addPostCreator()) }

    const onPostChange = postMessage => { dispatch(updateNewPostTextCreator(postMessage)) }

    return <AddMessage updateNewPostTextCreator = { onPostChange } addPost = { addPost } newMessageText = { newMessageText } />
}
