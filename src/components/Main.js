import React from "react";
import { GetRecent } from "../mocks/mocks";
import SeriesButtons from "./SeriesButtons";
import Playlist from "./Playlist";
import MainTabs from "./MainTabs";

let list = GetRecent.Data;

const Main = () => {
  return (
    <div className="m-auto d-flex row">
      {/* Left column */}
      <div className="col-lg-8 col-sm-12 " style={{ paddingTop: ".4em" }}>
        <div id="playerWell">
          {/* Start of Player */}
          <div
            style={{
              width: "100%",
              height: "776px",
              background: "yellowgreen"
            }}
          >
            <h1>Player</h1>
          </div>
          {/* End of Player */}
        </div>
        <div id="ut-player" />

        {/* Main tabs */}
        <MainTabs />
        {/* Main tabs */}
      </div>
      {/* Left column */}

      <div className="col-lg-4  col-sm-12">
        <div id="cColumn" className="right-banners">
          {/* SerriesButtons */}
          <SeriesButtons />
          {/* SerriesButtons */}
        </div>
        {/* RecentVideosTabs */}
        <div id="right-tabs">
          <Playlist />
        </div>

        {/* Pager */}
        <div className="datapager"></div>
      </div>
      {/* RecentVideosTabs */}
    </div>
  );
};
export default Main;
