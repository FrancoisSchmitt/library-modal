import React from "react";
import "./modal.css";

var TextInput = function TextInput(_ref) {
    var title = _ref.title,
        message = _ref.message,
        btnMessage = _ref.btnMessage,
        openModal = _ref.openModal,
        closeModal = _ref.closeModal;
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "lol"
        ),
        openModal === true && React.createElement(
            "div",
            { className: "Modal" },
            React.createElement("div", { className: "modal-section" }),
            React.createElement(
                "div",
                { className: "modal-content" },
                React.createElement(
                    "div",
                    { className: "modal-title-content" },
                    React.createElement(
                        "div",
                        { className: "modal-title" },
                        React.createElement(
                            "h3",
                            null,
                            title
                        ),
                        React.createElement(
                            "button",
                            { onClick: closeModal, className: "btn-close-icon" },
                            React.createElement("i", { className: "fa fa-times" })
                        )
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

export default TextInput;