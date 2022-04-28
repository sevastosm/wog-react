import React from "react";
import Banners from "../../components/banners/Banners";
import Playlist from "../../components/playlist/Playlist";
import MainTabs from "../../components/MainTabs";
import VideoPlayer from "../../components/player/VideoPlayer";
import { useMedia } from "react-media";

export default function HomePage() {
  const isSmallScreen = useMedia({ query: "(max-width: 599px)" });
  return (
    <div className="m-auto d-flex row">
      <div className="col-lg-8 col-sm-12 main-container">
        <div />
        {/* Video player */}
        <VideoPlayer />

        {/* Main tabs */}
      </div>
      {/* Left column */}

      <div className="col-lg-4  col-sm-12">
        {/* Main tabs */}
        {!isSmallScreen && <MainTabs />}
        {/* RecentVideosTabs */}
        <div id="right-tabs">
          <h1 className="title" style={{ borderBottom: "1px solid #0000001a" }}>
            Recent serries
          </h1>
        </div>

        {/* Pager */}
        <div className="datapager"></div>
      </div>
      <div>
        {!isSmallScreen && <Banners />}

        <Playlist />
      </div>
      {/* RecentVideosTabs */}
    </div>
  );
}
