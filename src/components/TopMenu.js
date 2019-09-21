import React from "react";
import Logo from "../Assets/Header/logo.svg" 

import SpeakersAutoComplete from "./SpeakersAutoComplete"


export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isSearchOpen:false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
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
          <div
            id="mainSearchcontainer"
            className="header-item  flex-grow-1 d-flex"
          >

            <SpeakersAutoComplete />
            
            <a id="searchHead" onclick="runHeadSearch()">
              <div className="main-icon" data-type="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 250.313 250.313"
                  style={{ enableBackground: "new 0 0 250.313 250.313" }}
                  xmlSpace="preserve"
                >
                  <g id="Search">
                    <path
                      style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                      d="M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76   c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911   c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38   c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146   c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236   C170.146,140.044,140.043,170.146,102.911,170.146z"
                    />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>
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
}
