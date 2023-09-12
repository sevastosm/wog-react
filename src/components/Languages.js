import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../components/AppContext";
import { useMedia } from "react-media";

export default function Languages() {
  const { setLang } = useContext(AppContext);
  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });

  const cn = isSmallScreen ? "small" : "";

  return (
    <div className={cn}>
      <div className="d-flex flex-column flex-wrap">
        <div className="header-item">
          <ul className="tabs navbar-nav mr-auto flex-row">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/gr"
                title="Ελληνικά"
                onClick={() => setLang("gr")}
              >
                GR
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/en"
                title="English"
                onClick={() => setLang("en")}
              >
                EN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/it"
                title="Italiano"
                onClick={() => setLang("it")}
              >
                IT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/es"
                title="Español"
                onClick={() => setLang("es")}
              >
                ES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/ru"
                title="Русский"
                onClick={() => setLang("ru")}
              >
                RU
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/ro"
                title="Română"
                onClick={() => setLang("ro")}
              >
                RO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/pl"
                title="Polski"
                onClick={() => setLang("pl")}
              >
                PL
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/fr"
                title="Francais"
                onClick={() => setLang("fr")}
              >
                FR
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/sq"
                title="Squip"
                onClick={() => setLang("sq")}
              >
                AL
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
