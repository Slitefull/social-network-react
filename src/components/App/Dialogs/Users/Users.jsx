import React from "react";
import {NavLink} from "react-router-dom";

const AddUser = ({link, name}) => {
    return (
        <div className="user">
            <NavLink to={link} className="user__link">User: {name}</NavLink>
        </div>
    );
}

const Users = () => {
    return (
        <div className="users">
            <AddUser link={"/dialogs/1"} name={"Max"}/>
            <AddUser link={"/dialogs/2"} name={"Sanya"}/>
            <AddUser link={"/dialogs/3"} name={"Ivan"}/>
            <AddUser link={"/dialogs/4"} name={"Dimon"}/>
            <AddUser link={"/dialogs/5"} name={"Oleg"}/>
        </div>
    );
}

export default Users;