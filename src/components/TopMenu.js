import React from "react";
import Logo from "../Assets/Header/logo.svg";
import { Link } from "react-router-dom"

export default function TopMenu() {

  const handleClick=(id)=>localStorage.setItem('param',id)

  return (
    <header>
      <div className="navbar navbar-expand-md fixed-top">
        <div className="header-item d-flex  flex-grow-1">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              className="rounded float-left img-fluid"
              alt="..."
            />
          </Link>
        </div>
        <div className="d-flex flex-column flex-wrap ">
          <div className="header-item">
            <ul className="tabs navbar-nav mr-auto flex-row">
              <li className="nav-item">
                <Link className="nav-link" to="el" title="Ελληνικά" onClick={()=>handleClick('el')}>
                  GR
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="en" title="English" onClick={()=>handleClick('en')}>
                  EN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="it" title="Italiano" onClick={()=>handleClick('it')}>
                  IT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="ru" title="Русский" onClick={()=>handleClick('ru')}>
                  RU
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="ro" title="Română" onClick={()=>handleClick('ro')}>
                  RO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pl" title="Polski" onClick={()=>handleClick('pl')}>
                  PL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="fr" title="Francais" onClick={()=>handleClick('fr')}>
                  FR
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="sq" title="Squip" onClick={()=>handleClick('sq')}>
                  AL
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
