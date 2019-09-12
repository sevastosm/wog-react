import React from "react";
import logo from "./logo.svg";
import TopMenu from "./ui/TopMenu";
import "./App.css";

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center ">
      <header className="w-100">
        <TopMenu />
      </header>
      <main style={{ marginTop: "50px" }}>
        <div>
          <div style={{ height: "100vh" }} class="d-flex flex-wrap">
            <div
              class="col-lg-8 d-flex flex-column"
              style={{ background: "red" }}
            >
              <div>Buttons</div>
              <div>List</div>
            </div>
            <div
              class="col-lg-4 d-flex flex-column"
              style={{ background: "green" }}
            >
              <div>Buttons</div>
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
