import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import AppContext from "./AppContext";
import useResources from "../hooks/UseResources";

function FiltersSidebar({ children }) {
  const resourses = useResources(["tabRecordingsSeriesHdr"]);
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
          <Offcanvas.Title>
            {" "}
            {resourses.length > 0 && resourses[0].Text}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FiltersSidebar;
