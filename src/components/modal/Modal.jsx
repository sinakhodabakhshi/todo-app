import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement(document.getElementById("root"));

export default function Modal({ children, isOpen }) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 41,
        },
      }}
      className={{
        base: "",
        afterOpen: "",
        beforeClose: "",
      }}
      overlayClassName={{
        base: " bg-[#242424]/70 ReactModal__Overlay",
        afterOpen: "ReactModal__Overlay--after-open",
        beforeClose: "ReactModal__Overlay--before-close",
      }}
      closeTimeoutMS={400}
      contentLabel="todo add form"
    >
      {children}
    </ReactModal>
  );
}
