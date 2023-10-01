import React, { useContext } from "react";
import AppContext from "./AppContext";
import useResources from "../hooks/UseResources";

function Sidebar({ children }) {
  const { sidebar, setSidebar, lang } = useContext(AppContext);

  const handleClose = (e) => {
    setSidebar(false);
  };
  const resourses = useResources([
    "Selections",
  ]);
  return (
    <div style={{ display: sidebar ? "block" : "none" }} className="sidebar">
      <div className="offcanvas-header">
        <div className="offcanvas-title h5">
          <h3>{resourses[0]?.Text}</h3>
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
