import React from "react";

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
                <a
                  id="ctl00_ifrContact"
                  onclick="CB_Open('href=http://www.wordofgod.gr/Contact.aspx?lang=el,,width=1000,,height=1000');"
                  title="Επικοινωνία"
                  style={{ cursor: "pointer" }}
                >
                  Επικοινωνία
                </a>
              </li>
              <li>
                <a
                  id="ctl00_ifrHelp"
                  onclick="CB_Open('href=http://www.wordofgod.gr/Help.aspx?lang=el,,width=1000,,height=1000');"
                  title="Βοήθεια"
                  style={{ cursor: "pointer" }}
                >
                  Βοήθεια
                </a>
              </li>
              <li>
                <a
                  id="ctl00_ifrNewsletter"
                  onclick="CB_Open('href=http://www.wordofgod.gr/Newsletter.aspx?lang=el,,width=1000,,height=1000');"
                  title="Newsletter"
                  style={{ cursor: "pointer" }}
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  id="ctl00_ifrWhatisWordofgod"
                  onclick="CB_Open('href=http://www.wordofgod.gr/WhatisWordofGod.aspx?lang=el,,width=1000,,height=1000');"
                  title="Τι είναι το WordofGod"
                  style={{ cursor: "pointer" }}
                >
                  Τι είναι το WordofGod
                </a>
              </li>
              <li>
                <a
                  id="ctl00_ifrHistory"
                  onclick="CB_Open('href=http://www.wordofgod.gr/History.aspx?lang=el,,width=1000,,height=1000');"
                  title="Ιστορία"
                  style={{ cursor: "pointer" }}
                >
                  Ιστορία
                </a>
              </li>
              <li>
                <a
                  id="ctl00_ifrLinks"
                  onclick="CB_Open('href=http://www.wordofgod.gr/Links.aspx?lang=el,,width=1000,,height=1000');"
                  title="Σύνδεσμοι"
                  style={{ cursor: "pointer" }}
                >
                  Σύνδεσμοι
                </a>
              </li>
              <li>
                <a
                  href="/cookies.aspx"
                  id="ctl00_lnkCookies"
                  title="Cookies"
                  style={{ cursor: "pointer" }}
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  id="ctl00_ifrDonate"
                  onclick="CB_Open('href=http://www.wordofgod.gr/DonateInfo.aspx?lang=el,,width=1000,,height=1000');"
                  title="Donate"
                  style={{ cursor: "pointer", display: "none" }}
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
          <div className="container mw-100 t-0 text-center mr-auto">
            <a
              id="ctl00_ifrCopyright"
              onclick="CB_Open('href=http://www.wordofgod.gr/Legal.aspx?lang=el,,width=1000,,height=1000');"
              title="Copyright"
              style={{ cursor: "pointer" }}
            >
              Copyright&nbsp;2019&nbsp;Word of God - Ο Λόγος του Θεού στη
              σύγχρονη τεχνολογία
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
