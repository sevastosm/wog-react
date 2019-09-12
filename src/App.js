import React from "react";
import TopMenu from "./components/TopMenu";
import SeriesButtons from "./components/SeriesButtons";
import Playlist from "./components/Playlist";

import "./App.css";

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center ">
      <header className="w-100">
        <TopMenu />
      </header>
      <main style={{ marginTop: "50px" }}>
        <div>
          <div style={{ height: "100vh" }} className="d-flex flex-wrap">
            <div
              className="col-lg-8 d-flex flex-column"
              style={{ background: "red" }}
            >
              <div>Player</div>
              <div>List</div>
            </div>
            <div
              className="col-lg-4 d-flex flex-column"
              style={{ background: "green" }}
            >
              <SeriesButtons />
              <hr />
              <Playlist />

              <div>List</div>
            </div>
          </div>
        </div>
      </main>
      <footer style={{ background: "blue" }}>dfgfgfgfg</footer>
    </div>
  );
}

export default App;
