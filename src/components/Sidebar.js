import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import AppContext from "./AppContext";

function Sidebar({ children }) {
  const { sidebar, setSidebar, lang } = useContext(AppContext);

  const handleClose = () => setSidebar(false);

  return (
    <>
      <Offcanvas
        // backdrop={true}
        scroll={true}
        show={sidebar}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>{lang !== "gr" ? "Menu" : "Επιλογές"}</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
