import React from 'react';
import './Modal.scss';
import { isModalCreator } from "../../../redux/state";

const showModal = props => {
    const action = isModalCreator();
    props.dispatch(action);
}

export const ModalButton = props => (
    <button onClick = { () => showModal(props) } className = "menu__item--button">Add Film</button>
);

export const Modal = () => (
        <div className = "modal" >
            <div className = "modal-wrapper">
                <h2 className = "modal-wrapper__title">Add a new film</h2>
                <input className = "modal-wrapper__input" placeholder = "Enter film title" type = "text"/>
                <input className = "modal-wrapper__input" placeholder = "Enter film year" type = "text"/>
                <input className = "modal-wrapper__input" placeholder = "Enter film link picture" type = "text"/>
                <button className = "modal-wrapper__button">Add</button>
            </div>
        </div>
    )