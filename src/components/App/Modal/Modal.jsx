import React from 'react';
import './Modal.scss';

const Modal = () => {
    return (
        <div className="modal not-active" id="modal">
            <div className="modal-wrapper">
                <h2 className="modal-wrapper__title">Add a new film</h2>
                <input className="modal-wrapper__input" placeholder="Enter film title" type="text"/>
                <input className="modal-wrapper__input" placeholder="Enter film year" type="text"/>
                <input className="modal-wrapper__input" placeholder="Enter film link picture" type="text"/>
                <button className="modal-wrapper__button">Add</button>
            </div>
        </div>
    );
}

export default Modal;