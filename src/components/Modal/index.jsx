import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

export function Modal({ onClose, show, title, children }) {
  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h1 className="modal-title">{title}</h1>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
}
