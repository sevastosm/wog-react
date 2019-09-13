import React from "react";
import Playlist from "./Playlist";
import { AppContext } from "./AppContext";

function AllSeries() {
  return (
    <AppContext.Consumer>
      {({ tonggleAllSeries }) => (
        <div>
          <button onClick={tonggleAllSeries}>Close</button>
          <br />
          <Playlist />
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default AllSeries;
