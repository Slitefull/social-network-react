import React from "react";
import { NavLink } from "react-router-dom";
import { addUserCreator, updateNewUserNameCreator } from "../../../../redux/state";

const AddUser = ({ id, name }) => {
    return (
        <div className="user">
            <NavLink to={ "/dialogs/" + id } className="user__link">User: { name }</NavLink>
        </div>
    );
}

const NewUser = props => {
    const dialogsUser = React.createRef();

    const addUser = () => {
        const action = addUserCreator();
        props.dispatch(action);
    }

    const onUserChange = () => {
        const userName = dialogsUser.current.value;
        const action = updateNewUserNameCreator(userName);
        props.dispatch(action);
    }

    return (
      <div className="new-user">
          <p className="new-user__name">Add user</p>
          <input className="new-user__input" ref = { dialogsUser } onChange={ onUserChange } value = { props.newUserName } type = "text"/>
          <button onClick={ addUser } className="new-user__button">Add</button>
      </div>
    );
}

const Users = props => {
    const usersElements = props.users.map(u => <AddUser { ...u }/>);

    return (
        <div className="users">
            <NewUser newUserName = { props.newUserName } dispatch = { props.dispatch } />
            { usersElements }
        </div>
    );
}

export default Users;