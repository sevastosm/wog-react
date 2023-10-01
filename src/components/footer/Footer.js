import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useResources from "../../hooks/UseResources";

import "./footer.scss";
import { useMedia } from "react-media";

import { route } from "../../constants";

export default function () {
  const match = useRouteMatch("/:lang");

  if (!match) return null;

  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
  if (isSmallScreen) return null;

  const resourses = useResources([
    "Contact",
    "History",
    "WhatisWordofGod",
    "LegalNotice"
  ]);
  return (
    <footer className={isSmallScreen && "small"} style={{ marginTop: "auto" }}>
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
                {resourses[1]?.Text}

              </Link>
            </li>
            {/* <li>
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
            </li> */}
            {/* <li>
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
              </li>*/}
            <li>
              <Link
                to={`${match.url}/${route.ABOUT}`}
                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {resourses[0]?.Text}

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
                {resourses[3]?.Text}
              </Link>
            </li>
            <li>
              <Link
                to={`${match.url}/${route.COOKIES}`}
                style={{ cursor: "pointer", textDecoration: "none" ,color:'white'}}
              >
                {resourses[2]?.Text}
              </Link>
            </li>
            {/* <li>
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
