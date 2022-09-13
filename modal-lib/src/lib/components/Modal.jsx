import React from "react";
import "./modal.css";

const TextInput = ({
    title ,
    message,
    btnMessage,
    openModal,
    closeModal,

}) => (
    <div>
        <h1>lol
            
        </h1>
        {
            openModal === true &&
            <div className='Modal'>
                <div className="modal-section"></div>
                <div className="modal-content">
                    <div className='modal-title-content'>
                        <div className='modal-title'>
                            <h3>{title}</h3>
                            <button onClick={closeModal} className="btn-close-icon"><i className="fa fa-times"></i></button>
                        </div>
                        <p className='modal-paragraphe'>{message}</p>
                        <button onClick={closeModal} className="btn-close">{btnMessage}</button>
                    </div>
                </div>
            </div>
        }
    </div>
);

export default TextInput;