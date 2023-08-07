import React, { useContext } from "react";
import AppContext from "./AppContext";

function Sidebar({ children }) {
  const { sidebar, setSidebar, lang } = useContext(AppContext);

  const handleClose = (e) =>{e.prevendDefault(); setSidebar(false);}

  return (
    <div style={{ display: sidebar ? 'block' : 'none' }} className="sidebar">
      <div class="offcanvas-header">
        <div class="offcanvas-title h5">
          <h3>Επιλογές</h3></div>
          <button type="button" onClick={handleClose} class="btn-close" aria-label="Close">
            </button></div>
            <div class="offcanvas-body" >
            {children}
            </div>
     
    </div>
  );
}

export default Sidebar;
