import React, { Fragment } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

function Backdrop(props) {
    return <div className="backdrop" onClick={props.onClose} />;
}

function ModalOverlay(props) {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    );
}
const PortalElement = document.getElementById("overlays");

function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                PortalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                PortalElement
            )}
        </Fragment>
    );
}

export default Modal;
