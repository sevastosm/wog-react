import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import AppContext from "./AppContext";

function FiltersSidebar({ children }) {
  const { filterSidebar, setFilterSidebar } = useContext(AppContext);

  const handleClose = () => setFilterSidebar(false);

  return (
    <>
      <Offcanvas
        // backdrop={true}
        scroll={true}
        show={filterSidebar}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FiltersSidebar;
