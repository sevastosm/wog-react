import React, { useContext } from "react";
import AppContext from "./AppContext";

function Sidebar({ children }) {
  const { sidebar, setSidebar, lang } = useContext(AppContext);

  const handleClose = (e) => {
    setSidebar(false);
  };

  return (
    <div style={{ display: sidebar ? "block" : "none" }} className="sidebar">
      <div className="offcanvas-header">
        <div className="offcanvas-title h5">
          <h3>Επιλογές</h3>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">{children}</div>
    </div>
  );
}

export default Sidebar;
