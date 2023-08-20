import React from "react";
import "./Toast.css";

const Toast = (props) => {
  const buttonClickHandler = (title) => {
    console.log(title);
  };
  return (
    <div className={`toast toast-${props.title}`}>
      <main className="toast__message">
        <headers className="toast__message-title">{props.title}</headers>
        <p className="toast__message-text">{props.text}</p>
      </main>
      <button
        className="toast__button"
        onClick={() => buttonClickHandler(props.title)}
      >
        Dismiss
      </button>
    </div>
  );
};

export default Toast;
