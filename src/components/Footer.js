import React from "react";
import { Link } from "react-router-dom"

import route from "../constants/constants"
import routes from "../routes";
export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <footer>
        <div id="footer" className="footer">
          <div className="footerRow">
            <ul>
              <li>
                <Link
                  to={route.CONTACT}
                  style={{ cursor: "pointer", color: "white", textDecoration:"none" }}
                >
                  Επικοινωνία
                </Link>
              </li>
              <li>
                <Link
                  to={route.HELP}
                  style={{ cursor: "pointer", color: "white", textDecoration:"none" }}
                >
                  Βοήθεια
                </Link>
              </li>
              <li>
                <Link
                  to={route.NEWSLETTER}
                  style={{ cursor: "pointer", color: "white", textDecoration:"none" }}
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  to={route.ABOUT}
                  style={{ cursor: "pointer", color: "white", textDecoration:"none" }}
                >
                  Τι είναι το WordofGod
                </Link>
              </li>
              <li>
                <Link
                  to={route.HISTORY}
                  style={{ cursor: "pointer", color: "white", textDecoration:"none" }}
                >
                  Ιστορία
                </Link>
              </li>
              <li>
                <Link
                  to={route.LINK}
                  style={{ cursor: "pointer", color: "white", textDecoration:"none" }}
                >
                  Σύνδεσμοι
                </Link>
              </li>
              <li>
                <Link
                  to={route.COOKIES}
                  style={{ cursor: "pointer", textDecoration:"none" }}
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
}
