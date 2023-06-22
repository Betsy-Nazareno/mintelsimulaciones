import React, { Fragment } from "react";

const Modal = ({ children, isOpen, setIsOpen }: any) => {
  const DIV_MODAL_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#fff",
    padding: "50px",
    zIndex: 1000,
  };
  const DIV_OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.7)",
    zIndex: 1000,
  };
  return isOpen ? (
    <>
      <div style={DIV_OVERLAY_STYLE as any} />
      <div style={DIV_MODAL_STYLE as any}>
        <button
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            paddingRight: "10px",
          }}
          onClick={() => setIsOpen(false)}
        >
          <div className="text-xl font-bold">Close X</div>
        </button>
        <section id="Modal Body">{children}</section>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Modal;
