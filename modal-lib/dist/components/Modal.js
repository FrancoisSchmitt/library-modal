import React from "react";
import "./modal.css";

var Modal = function Modal(_ref) {
    var title = _ref.title,
        message = _ref.message,
        btnMessage = _ref.btnMessage,
        openModal = _ref.openModal,
        closeModal = _ref.closeModal;
    return React.createElement(
        "div",
        { className: "modal-container" },
        openModal === true && React.createElement(
            "div",
            { className: "modal" },
            React.createElement(
                "div",
                { className: "modal-content" },
                React.createElement(
                    "div",
                    { className: "modal-title-content" },
                    React.createElement(
                        "h3",
                        { className: "modal-title" },
                        title
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-paragraphe" },
                        message
                    ),
                    React.createElement(
                        "button",
                        { onClick: closeModal, className: "btn-close" },
                        btnMessage
                    )
                )
            )
        )
    );
};

export default Modal;