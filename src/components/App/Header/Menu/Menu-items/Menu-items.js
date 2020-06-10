import React from 'react';

const AddItem = ({link, name}) => {
    return (
        <div className="menu__item">
            <a href={link} className="menu__item--link">{name}</a>
        </div>
    );
}

const MenuItems = () => {
    return (
        <>
            <AddItem link="#" name="Main"/>
            <AddItem link="#" name="Pictures"/>
            <AddItem link="#" name="Films"/>
            <AddItem link="#" name="Games"/>
            <AddItem link="#" name="Music"/>
            <AddItem link="#" name="Contacts"/>
        </>
    );
}

export default MenuItems;