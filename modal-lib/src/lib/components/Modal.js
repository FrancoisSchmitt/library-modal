import React from "react";
import "./modal.css";

const Modal = ({
    title ,
    message,
    btnMessage,
    openModal,
    closeModal,

}) =>
(
    <div className="modal-container">
        {
            openModal === true &&
            <div className='modal'>
                <div className="modal-content">
                    <div className='modal-title-content'>
                        <h3 className="modal-title">{title}</h3>
                        <p className='modal-paragraphe'>{message}</p>
                        <button onClick={closeModal} className="btn-close">{btnMessage}</button>
                    </div>
                </div>
            </div>

            }
     </div>
);

export default Modal;