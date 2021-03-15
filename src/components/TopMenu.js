import React from "react";
import Logo from "../Assets/Header/logo.svg";
export default function TopMenu() {
  return (
    <header>
      <div className="navbar navbar-expand-md fixed-top">
        <div className="header-item d-flex  flex-grow-1">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              className="rounded float-left img-fluid"
              alt="..."
            />
          </a>
        </div>
        <div className="d-flex flex-column flex-wrap ">
          <div className="header-item">
            <ul className="tabs navbar-nav mr-auto flex-row">
              <li className="nav-item">
                <a className="nav-link" href="el" title="Ελληνικά">
                  GR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="en" title="English">
                  EN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="it" title="Italiano">
                  IT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="ru" title="Русский">
                  RU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="ro" title="Română">
                  RO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pl" title="Polski">
                  PL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="fr" title="Francais">
                  FR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="sq" title="Squip">
                  AL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
