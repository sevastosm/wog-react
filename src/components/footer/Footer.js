import React, { useContext } from "react";
import { Link, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { applicationLang } from "../../utils";

import "./footer.scss";
import { useMedia } from "react-media";
import AppContext from "../../components/AppContext";

import { route } from "../../constants";

export default function () {
  const { setActivePlaylist, series, lang, setFilterSidebar, filterSidebar } =
    useContext(AppContext);
  const locat = useLocation();
  const params = useParams();
  const match = useRouteMatch("/:lang");

  console.log("locat", locat);
  console.log("params", params);
  console.log("match", match);

  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });
  return (
    <footer className={isSmallScreen && "small"}>
      <div id="footer" className="footer">
        <div className="footerRow">
          <ul>
            <li>
              <Link
                to={`${match.url}/${route.CONTACT}`}
                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Επικοινωνία
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}/${route.HELP}`}
                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Βοήθεια
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}/${route.NEWSLETTER}`}
                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Newsletter
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}/${route.ABOUT}`}
                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Τι είναι το WordofGod
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}/${route.HISTORY}`}
                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Ιστορία
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}/${route.LINK}`}
                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Σύνδεσμοι
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}/${route.COOKIES}`}
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Cookies
              </Link>
            </li>
            {/* <li>
                <Link
                  to="/donate"
                  style={{ cursor: "pointer", display: "none" }}
                >
                  Donate
                </Link>
              </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
