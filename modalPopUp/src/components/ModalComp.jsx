import React, { useState } from "react";
import "../css/Modal.css";

const ModalComp = () => {
  const [open, setOpen] = useState(false);

  /*
    in modal popup  setOpen(true) opens the popup
    e.target === e.currentTarget 
    🟢 When does the condition become TRUE?
        ✔ Clicking the overlay (outside modal)
        target         = overlay
        currentTarget  = overlay

        overlay === overlay  // true


        ➡️ Modal closes ✅

    🔴 When does the condition become FALSE?
        ❌ Clicking inside modal
        target         = modal OR button OR text
        currentTarget  = overlay

        modal === overlay  // false


➡️ Modal stays open ✅
  */

  return (
    <>
      <button onClick={() => setOpen(true)}>show details</button>

      {open && (
        <div
          className="main-container"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div className="container">
            Lorem ipsum dolor sit amet.
            <button onClick={() => setOpen(false)}>close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComp;
