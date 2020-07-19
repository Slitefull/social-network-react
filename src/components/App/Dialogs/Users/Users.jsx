import React from "react";
import {NavLink} from "react-router-dom";

const AddUser = ({id, name}) => {
    return (
        <div className="user">
            <NavLink to={"/dialogs/" + id} className="user__link">User: {name}</NavLink>
        </div>
    );
}

const Users = props => {
    const usersElements = props.users.map(u => <AddUser {...u}/>);

    return (
        <div className="users">
            {usersElements}
        </div>
    );
}

export default Users;