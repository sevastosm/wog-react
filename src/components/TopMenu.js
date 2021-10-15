import React, { useContext } from "react";
import Logo from "../Assets/Header/logo.svg";
import { Link } from "react-router-dom";
import useResources from "../hooks/UseResources";
import AppContext from "../components/AppContext";
import Languages from "./Languages";
import { useMedia } from "react-media";

export default function TopMenu() {
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });

  const { setLang, sidebar, setSidebar } = useContext(AppContext);

  const resourses = useResources("ChristianChannel");

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  return (
    <header className={isSmallScreen && "small"}>
      <div className={`navbar navbar-expand-md fixed-top`}>
        <div className="header-item d-flex  flex-grow-1">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              className="rounded float-left img-fluid"
              alt="..."
            />
          </Link>
          {isSmallScreen && (
            <button className="button toogle" onClick={handleClick}>
              <div></div>
              <div></div>
              <div></div>
            </button>
          )}
        </div>
        {!isSmallScreen && (
          <>
            <h1 className="title flex-grow-1">{resourses?.Text}</h1>
            <Languages />
          </>
        )}
      </div>
    </header>
  );
}
