import React from "react";
import { GetRecent } from "../mocks/mocks";
import SeriesButtons from "./SeriesButtons";
import Playlist from "./Playlist";
import MainTabs from "./MainTabs";
import Videoplayer from "./VideoPlayer"
import apis from  "./api/apis"

let list = GetRecent.Data;

const Main = () => {

  apis.GET_ALL_SERMONS()
  return (
    <div className="m-auto d-flex row">
      {/* Left column */}
      <div className="col-lg-8 col-sm-12 main-container">
        <div/>
        {/* Video player */}
           <Videoplayer/>

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
        <h2 style={{ borderBottom: "1px solid #0000001a" }}>Recent serries</h2>
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
