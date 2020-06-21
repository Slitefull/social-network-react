import React from "react";
import {NavLink} from "react-router-dom";

const AddUser = ({id, name}) => {
    return (
        <div className="user">
            <NavLink to={"/dialogs/" + id} className="user__link">User: {name}</NavLink>
        </div>
    );
}

const Users = () => {
    let users = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Dimon'},
        {id: 5, name: 'Oleg'},
    ]

    let usersElements = users.map(u => <AddUser id={u.id} name={u.name}/>);

    return (
        <div className="users">
            {usersElements}
        </div>
    );
}

export default Users;