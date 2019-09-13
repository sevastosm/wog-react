import React from "react";

function Main() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="navbar navbar-expand-md fixed-top">
          <div className="header-item  flex-grow-1">
            <a className="navbar-brand" href="#">
              <img
                src="../images/fav/logo-wogsvg.svg"
                className="rounded float-left img-fluid"
                alt="..."
              />
            </a>
          </div>
          <div
            id="mainSearchcontainer"
            className="header-item  flex-grow-1 d-flex"
          >
            <input id="mainSearch" type="text" name="name" />
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

      {/* Header */}

      <div>
        <div id="begining"></div>
        {/* end #login */}
        <div className id="page">
          <div className="m-auto d-flex row">
            {/* Left column */}
            <div className="col-lg-8 col-sm-12 " style={{ paddingTop: ".4em" }}>
              <div id="playerWell">
                {/* Start of Player */}
                <div
                  id="mep_0"
                  className="mejs-container mejs-video"
                  style={{ width: "1379.62px", height: "776px" }}
                >
                  <div className="mejs-inner">
                    <div className="mejs-mediaelement">
                      <div
                        className="me-cannotplay cannotplay1"
                        style={{ width: "0px", height: "0px" }}
                      >
                        <a href="https://www.facebook.com/wordofgodchurch.gr/videos/398215020837595/">
                          <span style={{ padding: "10px 10px 5px 10px" }}>
                            Click here to download file,
                            <br />
                            https://www.facebook.com/wordofgodchurch.gr/videos/398215020837595/
                          </span>
                        </a>
                      </div>
                      <video
                        poster="/images/logo_player_494x278.png"
                        id="ctl00_main_MediaPlayer1"
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "none"
                        }}
                        preload="auto"
                        autoPlay="autoplay"
                        src="https://www.facebook.com/wordofgodchurch.gr/videos/398215020837595/"
                        type="video/wmv"
                      ></video>
                    </div>
                    <div className="mejs-layers" />
                    <div
                      className="mejs-controls"
                      style={{ display: "none" }}
                    />
                    <div className="mejs-clear" />
                  </div>
                </div>
                {/* End of Player */}
              </div>
              <div id="ut-player" />
              <div>
                <table className="d-none" width={351} border={0}>
                  <tbody>
                    <tr>
                      <td />
                      <td style={{ textAlign: "right", width: "35px" }}>
                        <a
                          href="javascript:void(0);"
                          onclick="getLive();return false;"
                        >
                          <img
                            src="/images/returntolive.png"
                            id="ctl00_main_iReturnToLive"
                            style={{ border: "0px" }}
                            align="right"
                            title="Επιστροφή στο Live"
                          />
                        </a>
                      </td>
                      <td style={{ textAlign: "right", width: "35px" }}>
                        <a
                          href="http://www.wordofgod.gr/Help2.aspx?lang=el"
                          id="ctl00_main_ifrHelp2"
                          rel="clearbox[width=640,,height=250]"
                          title="Βοήθεια"
                        >
                          <img
                            src="/images/help.png"
                            id="ctl00_main_iUpperHelp"
                            style={{ border: "0px" }}
                            title="Βοήθεια"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                id="ctl00_main_tabs1"
                className="custom-tabs ajax__tab_container ajax__tab_default"
                style={{ width: "100%", visibility: "visible" }}
              >
                <div id="ctl00_main_tabs1_header" className="ajax__tab_header">
                  <span
                    id="ctl00_main_tabs1_currentStream_tab"
                    className="ajax__tab_active"
                  >
                    <span className="ajax__tab_outer">
                      <span className="ajax__tab_inner">
                        <span
                          id="__tab_ctl00_main_tabs1_currentStream"
                          className="ajax__tab_tab"
                        >
                          Τώρα βλέπετε
                        </span>
                      </span>
                    </span>
                  </span>
                  <span id="ctl00_main_tabs1_tabProgram_tab">
                    <span className="ajax__tab_outer">
                      <span className="ajax__tab_inner">
                        <span
                          id="__tab_ctl00_main_tabs1_tabProgram"
                          className="ajax__tab_tab"
                        >
                          Πρόγραμμα
                        </span>
                      </span>
                    </span>
                  </span>
                  <span id="ctl00_main_tabs1_allseries_tab">
                    <span className="ajax__tab_outer">
                      <span className="ajax__tab_inner">
                        <span
                          id="__tab_ctl00_main_tabs1_allseries"
                          className="ajax__tab_tab"
                        >
                          Εκπομπές
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
                <div
                  id="ctl00_main_tabs1_body"
                  className="ajax__tab_body ajax__scroll_auto"
                >
                  <div
                    id="ctl00_main_tabs1_currentStream"
                    style={{ visibility: "visible" }}
                    className="ajax__tab_panel"
                  >
                    <span id="ctl00_main_tabs1_currentStream_lblSermonsData">
                      <b>Μετάδοση σε εξέλιξη</b>:<br />
                      00:00 Κυριακάτικο Κήρυγμα 26/02/2017 (Γένεσις κβ' 1-19
                      &amp; προς Εβραίους ια' 8-10)
                      <br />
                      <br />
                      <br />
                      <b>Επόμενη μετάδοση</b>:<br />
                      00:30 Κυριακάτικο Κήρυγμα 26/02/2017 (κατά Μάρκον ις'
                      1-20)
                    </span>
                  </div>
                  <div
                    id="ctl00_main_tabs1_tabProgram"
                    style={{ display: "none", visibility: "hidden" }}
                    className="ajax__tab_panel"
                  >
                    <iframe
                      id="ifrProgramData"
                      src="http://www.wordofgod.gr/new/DisplayProgram.htm"
                      frameBorder={0}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div
                    id="ctl00_main_tabs1_allseries"
                    style={{ display: "none", visibility: "hidden" }}
                    className="ajax__tab_panel"
                  >
                    <div id="accordion">
                      <div className="d-flex flex-wrap">
                        <div className id="headingOne">
                          <h5 className="mb-0">
                            <div
                              className="btn wog-btn "
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              ΟΛΕΣ ΟΙ ΕΚΠΟΜΠΕΣ
                            </div>
                          </h5>
                        </div>
                        <div id="headingTwo">
                          <h5 className="mb-0">
                            <div
                              id="filtersButton"
                              className="btn  wog-btn  collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              ΦΙΛΤΡΑ ΑΝΑΖΗΤΗΣΗΣ
                            </div>
                          </h5>
                        </div>
                      </div>
                      <div className>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <iframe
                              id="AllSeries"
                              src="http://www.wordofgod.gr/new/AllSeries.aspx?lang=el"
                              frameBorder={0}
                              className="mCustomScrollbar frame-series"
                              style={{}}
                            />
                          </div>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <iframe
                              id="ifrSearch"
                              src="http://www.wordofgod.gr/new/Search2.aspx?lang=el"
                              frameBorder={0}
                              className="frame-searchdf"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Left column */}

            {/* Right column */}
            <div className="col-lg-4  col-sm-12">
              <div id="cColumn" className="right-banners">
                <div id="search-results-column" style={{ display: "none" }}>
                  <a id="closeSearchResults">
                    <div className="svg-version active">
                      <div className="main-icon" data-type="svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 51.976 51.976"
                          style={{ enableBackground: "new 0 0 51.976 51.976" }}
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z" />
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
                    </div>
                  </a>
                  <iframe
                    id="ifrSearch1"
                    src="/Search2.aspx?lang=el"
                    frameBorder={0}
                    className="frame-search"
                  />
                </div>
                {/* SerriesButtons */}
                <div className="d-flex">
                  <div className="d-flex flex-column w-100">
                    <div className="adv d-flex">
                      <a
                        href="javascript:__doPostBack('ctl00$main$adv1','')"
                        onclick="_setRecordingsSeries('serieid=110');return false;"
                        id="ctl00_main_adv1"
                      >
                        Χριστιανική Οικογένεια
                      </a>
                    </div>
                    <div className="adv d-flex">
                      <a
                        href="javascript:__doPostBack('ctl00$main$adv2','')"
                        onclick="_setRecordingsSeries('serieid=13');return false;"
                        id="ctl00_main_adv2"
                        title="η εκπομπή: Απαντήσεις από το Λόγο του Θεού"
                      >
                        Απαντήσεις από το Λόγο του Θεού
                      </a>
                    </div>
                    <div className="adv d-flex">
                      <a
                        href="javascript:__doPostBack('ctl00$main$adv3','')"
                        onclick="_setRecordingsSeries('serieid=121');return false;"
                        id="ctl00_main_adv3"
                      >
                        Ακούσματα
                      </a>
                    </div>
                    <div id="ctl00_main_phMidLeftAdv" className="adv d-flex">
                      <a
                        href="javascript:__doPostBack('ctl00$main$adv4','')"
                        onclick="_setRecordingsSeries('serieid=92');return false;"
                        id="ctl00_main_adv4"
                      >
                        Επί τω Λόγω Σου
                      </a>
                    </div>
                    <div className="adv d-flex">
                      <a
                        href="javascript:__doPostBack('ctl00$main$adv5','')"
                        onclick="_setRecordingsSeries('serieid=67');return false;"
                        id="ctl00_main_adv5"
                      >
                        Ομολογίες Πίστεως
                      </a>
                    </div>
                  </div>
                </div>
                {/* SerriesButtons */}
              </div>
              {/* RecentVideosTabs */}
              <div id="right-tabs">
                <div id="ctl00_main_upnlLow">
                  <div
                    id="ctl00_main_tabs2"
                    className="custom-tabs ajax__tab_container ajax__tab_default"
                    style={{ visibility: "visible" }}
                  >
                    <div
                      id="ctl00_main_tabs2_header"
                      className="ajax__tab_header"
                    >
                      <span
                        id="ctl00_main_tabs2_tRcnt_tab"
                        className="ajax__tab_active"
                      >
                        <span className="ajax__tab_outer">
                          <span className="ajax__tab_inner">
                            <span
                              id="__tab_ctl00_main_tabs2_tRcnt"
                              className="ajax__tab_tab"
                            >
                              Πρόσφατα
                            </span>
                          </span>
                        </span>
                      </span>
                      <span id="ctl00_main_tabs2_tSrs_tab">
                        <span className="ajax__tab_outer">
                          <span className="ajax__tab_inner">
                            <span
                              id="__tab_ctl00_main_tabs2_tSrs"
                              className="ajax__tab_tab"
                            ></span>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div
                      id="ctl00_main_tabs2_body"
                      className="ajax__tab_body ajax__scroll_auto"
                    >
                      <div
                        id="ctl00_main_tabs2_tRcnt"
                        style={{ visibility: "visible" }}
                        className="ajax__tab_panel"
                      >
                        <div id="ctl00_main_tabs2_tRcnt_upnlRecent">
                          <div
                            id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmnsResults"
                            className="overFlowAuto panel-sermons"
                          >
                            <div
                              cellSpacing={0}
                              cellPadding={5}
                              border={0}
                              width="100%"
                              className="recentsermonstable"
                            >
                              <div
                                style={{
                                  backgroundColor: "#000000",
                                  color: "#ffffff",
                                  display: "none"
                                }}
                              >
                                <div>Τίτλος</div>
                                <div>Ημερομηνία</div>
                                <div>Είδος αρχείου</div>
                                <div>Εργαλεία</div>
                              </div>
                              <div className="maintitle">
                                <div>
                                  <b>Μάθημα</b>
                                </div>
                              </div>
                              <div className="recording-row d-flex flex-row mb-3 data0 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/fONWDMlq8yQ','mediaid=52367',52369);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_youTubeThumb"
                                      src="https://img.youtube.com/vi/fONWDMlq8yQ/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    09.09.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    Κριταί ιε' 1-20 &amp; ις' 1-3
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/fONWDMlq8yQ','mediaid=52367',52369);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/Judges/10_Judges_ie1_ie20_is1_is3_GK_09_09_2019.mp3','mediaid=52369',52369);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl0_hpDl"
                                    onclick="showDownloadMenu(52367, event);return false;"
                                    oncontextmenu="showDownloadMenu(52367, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="maintitle">
                                <div>
                                  <b>Κυριακάτικο Κήρυγμα</b>
                                  <br />
                                  <i>
                                    "Βεβαίως ευλογών θέλω σε ευλογήσει και
                                    πληθύνων θέλω σε πληθύνει."
                                  </i>
                                </div>
                              </div>
                              <div className="recording-row d-flex flex-row mb-3 data1 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl1_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/LMo9qB-c3q0','mediaid=52354',52351);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl1_youTubeThumb"
                                      src="https://img.youtube.com/vi/LMo9qB-c3q0/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    08.09.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    1) Μιχαίας ζ' 1-20
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl1_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/LMo9qB-c3q0','mediaid=52354',52351);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl1_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/2019/37a_Micah_z1_z20_GK_08_09_2019.mp3','mediaid=52355',52351);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl1_hpDl"
                                    onclick="showDownloadMenu(52354, event);return false;"
                                    oncontextmenu="showDownloadMenu(52354, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="maintitle"></div>
                              <div className="recording-row d-flex flex-row mb-3 data0 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl2_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/ZcYAkqNuCiA','mediaid=52359',52356);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl2_youTubeThumb"
                                      src="https://img.youtube.com/vi/ZcYAkqNuCiA/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    08.09.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    2) προς Ρωμαίους η' 18-39
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl2_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/ZcYAkqNuCiA','mediaid=52359',52356);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl2_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/2019/37b_Romans_h18_h39_GK_08_09_2019.mp3','mediaid=52360',52356);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl2_hpDl"
                                    onclick="showDownloadMenu(52359, event);return false;"
                                    oncontextmenu="showDownloadMenu(52359, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="maintitle">
                                <div>
                                  <b>Μηνύματα αδελφών </b>
                                </div>
                              </div>
                              <div className="recording-row d-flex flex-row mb-3 data1 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl3_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/qvYicNyXT0E','mediaid=52347',52349);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl3_youTubeThumb"
                                      src="https://img.youtube.com/vi/qvYicNyXT0E/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    06.09.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    κατά Ματθαίον θ' 1-9 &amp; θ' 18-38 (Wissam
                                    Zein)
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl3_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/qvYicNyXT0E','mediaid=52347',52349);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl3_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/Other/2019/36_Matthew_th1_th9_th18_th38_WZ_06_09_2019.mp3','mediaid=52349',52349);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl3_hpDl"
                                    onclick="showDownloadMenu(52347, event);return false;"
                                    oncontextmenu="showDownloadMenu(52347, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="maintitle"></div>
                              <div className="recording-row d-flex flex-row mb-3 data0 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl4_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/HKn0ZKx_8os','mediaid=52339',52340);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl4_youTubeThumb"
                                      src="https://img.youtube.com/vi/HKn0ZKx_8os/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    05.09.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    Δανιήλ γ' 16-30 (Κώστας Δραγκιώτης)
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl4_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/HKn0ZKx_8os','mediaid=52339',52340);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl4_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/Other/2019/36_Daniel_c16_c30_KD_05_09_2019.mp3','mediaid=52340',52340);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl4_hpDl"
                                    onclick="showDownloadMenu(52339, event);return false;"
                                    oncontextmenu="showDownloadMenu(52339, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="maintitle"></div>
                              <div className="recording-row d-flex flex-row mb-3 data1 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl5_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/90MrI2fBM74','mediaid=52334',52335);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl5_youTubeThumb"
                                      src="https://img.youtube.com/vi/90MrI2fBM74/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    02.09.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    κατά Λουκάν ιε' 11-32 (Γεώργιος Δούκας)
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl5_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/90MrI2fBM74','mediaid=52334',52335);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl5_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/Other/2019/36_Luke_ie11_ie32_gd_02_09_2019.mp3','mediaid=52335',52335);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl5_hpDl"
                                    onclick="showDownloadMenu(52334, event);return false;"
                                    oncontextmenu="showDownloadMenu(52334, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="maintitle">
                                <div>
                                  <b>Κυριακάτικο Κήρυγμα</b>
                                  <br />
                                  <i>
                                    "Σήμερα, για να μην ταλαιπωρηθούμε, να
                                    ομολογήσουμε ότι σε πολλά φταίμε."
                                  </i>
                                </div>
                              </div>
                              <div className="recording-row d-flex flex-row mb-3 data0 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl6_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/132u5p4AZx0','mediaid=52324',52325);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl6_youTubeThumb"
                                      src="https://img.youtube.com/vi/132u5p4AZx0/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    01.09.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    1) Ιωβ λβ' 1-22
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl6_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/132u5p4AZx0','mediaid=52324',52325);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl6_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/2019/36a_Job_lb1_lb22_GK_01_09_2019.mp3','mediaid=52325',52325);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl6_hpDl"
                                    onclick="showDownloadMenu(52324, event);return false;"
                                    oncontextmenu="showDownloadMenu(52324, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="maintitle"></div>
                              <div className="recording-row d-flex flex-row mb-3 data1 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl7_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/V3zDsDY7VgM','mediaid=52329',52330);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl7_youTubeThumb"
                                      src="https://img.youtube.com/vi/V3zDsDY7VgM/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    01.09.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    2) Α' Πέτρου ε' 1-14
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl7_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/V3zDsDY7VgM','mediaid=52329',52330);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl7_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/2019/36b_1Peter_e1_e14_GK_01_09_2019.mp3','mediaid=52330',52330);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl7_hpDl"
                                    onclick="showDownloadMenu(52329, event);return false;"
                                    oncontextmenu="showDownloadMenu(52329, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="maintitle">
                                <div>
                                  <b>Μηνύματα αδελφών </b>
                                </div>
                              </div>
                              <div className="recording-row d-flex flex-row mb-3 data0 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl8_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/1RebR-wLVhc','mediaid=52319',52320);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl8_youTubeThumb"
                                      src="https://img.youtube.com/vi/1RebR-wLVhc/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    30.08.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    κατά Ματθαίον ιθ' 1-30 (Γεώργιος Κλουβάτος)
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl8_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/1RebR-wLVhc','mediaid=52319',52320);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl8_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/Other/2019/35_Matthew_ith1_ith30_GK_30_08_2019.mp3','mediaid=52320',52320);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl8_hpDl"
                                    onclick="showDownloadMenu(52319, event);return false;"
                                    oncontextmenu="showDownloadMenu(52319, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="maintitle">
                                <div>
                                  <b>Μάθημα</b>
                                </div>
                              </div>
                              <div className="recording-row d-flex flex-row mb-3 data1 ">
                                <div className="adv">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl9_youTubeLink"
                                    href="javascript:_mediaSrc('http://youtu.be/NeGhO-fDx1s','mediaid=52314',52315);"
                                  >
                                    <img
                                      id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl9_youTubeThumb"
                                      src="https://img.youtube.com/vi/NeGhO-fDx1s/1.jpg"
                                      style={{ borderWidth: "0px" }}
                                    />
                                  </a>
                                </div>
                                <div>
                                  <div className="recording-date">
                                    29.08.2019
                                    <br />
                                  </div>
                                  <div className="playlist-discription">
                                    προς Εβραίους ιβ' 12-29
                                  </div>
                                </div>
                                <div className="playlist-downloads">
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl9_hpVd"
                                    href="javascript:_mediaSrc('http://youtu.be/NeGhO-fDx1s','mediaid=52314',52315);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        style={{
                                          enableBackground: "new 0 0 60 60"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <path
                                          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15  C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884  c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"
                                          style={{ fill: "#193d4d" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl9_hpMP3"
                                    href="javascript:_mediaSrc('http://wordofgod.ddns.net/GR/Audio/Hebrews2018/26_Hebrews2018_ib12_ib29_GK_29_08_2019.mp3','mediaid=52315',52315);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 300 300"
                                        style={{
                                          enableBackground: "new 0 0 300 300"
                                        }}
                                        xmlSpace="preserve"
                                      >
                                        <g>
                                          <g>
                                            <path
                                              d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z"
                                              style={{
                                                fill: "rgb(25, 61, 77)"
                                              }}
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </a>
                                  <a
                                    id="ctl00_main_tabs2_tRcnt_ucRecentRecs_lvSrmns_ctrl9_hpDl"
                                    onclick="showDownloadMenu(52314, event);return false;"
                                    oncontextmenu="showDownloadMenu(52314, event);return false;"
                                    href="javascript:void(0);"
                                  >
                                    <div className="main-icon" data-type="svg">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 44 44"
                                        enableBackground="new 0 0 44 44"
                                      >
                                        <path
                                          d="M22,0C9.8,0,0,9.8,0,22s9.8,22,22,22s22-9.8,22-22S34.2,0,22,0z M31.7,25.7l-9,9C22.5,34.9,22.2,35,22,35  c-0.3,0-0.5-0.1-0.7-0.3l-9-9C12.1,25.5,12,25.3,12,25s0.1-0.5,0.3-0.7l1.4-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.3,0.3,0.9,0.1,0.9-0.4V10  c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v16.6c0,0.4,0.5,0.7,0.9,0.4l4-4c0.4-0.4,1-0.4,1.4,0l1.4,1.4c0.2,0.2,0.3,0.4,0.3,0.7  C32,25.3,31.9,25.5,31.7,25.7z"
                                          style={{ fill: "rgb(25, 61, 77)" }}
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="datapager">
                            <span id="ctl00_main_tabs2_tRcnt_ucRecentRecs_pgrSrmns">
                              <span className="PagerCurrent">1</span>&nbsp;
                              <a
                                className="PagerNormal"
                                href="javascript:__doPostBack('ctl00$main$tabs2$tRcnt$ucRecentRecs$pgrSrmns$ctl00$ctl01','')"
                              >
                                2
                              </a>
                              &nbsp;
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        id="ctl00_main_tabs2_tSrs"
                        style={{ display: "none", visibility: "hidden" }}
                        className="ajax__tab_panel"
                      >
                        <iframe
                          id="ifrSeries"
                          src="http://www.wordofgod.gr/new/RecordingsSeries.aspx?lang=el"
                          frameBorder={0}
                          className="frame-series"
                          style={{}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* RecentVideosTabs */}

              {/* end div#cColumn */}
              <div style={{ width: "100%", display: "none" }}>
                {/*   id="playlistMostViewedFeatured" */}
                <div className="header clearfix">
                  <div className="lfloat">
                    <h3>Browse Videos</h3>
                  </div>
                  <div
                    id="ctl00_main_div_historybible_WoG_banner_100"
                    className="rfloat"
                    style={{ paddingRight: "2px", paddingTop: "2px" }}
                  />
                  <div
                    id="ctl00_main_div_emphatictiglot_WoG_Banner_100"
                    className="rfloat"
                    style={{ paddingRight: "2px", paddingTop: "2px" }}
                  />
                  <div className="clear" />
                </div>
                {/* end div.header */}
              </div>
            </div>
          </div>
          {/* end #main */}
          <div
            className="d-none"
            id="adxVideoLeaderboard"
            style={{ textAlign: "center" }}
          />
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
          {/*close footer */}
        </div>
        {/* end #shell */}
      </div>
      {/* end #page */}
    </div>
  );
}

export default Main;
