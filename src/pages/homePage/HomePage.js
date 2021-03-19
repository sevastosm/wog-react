import React from "react";
import {
  useParams
} from "react-router-dom";
import Banners from "../../components/banners/Banners";
import Playlist from "../../components/playlist/Playlist";
import MainTabs from "../../components/MainTabs";
import VideoPlayer from "../../components/player/VideoPlayer"
import getIntialData from "../../utils"


const hasParm = window.localStorage.getItem("param");

export default function HomePage (){
  let { id } = useParams();
  console.log("slug",id)

  getIntialData(id?id:hasParm||'el')
    return (
    <div className="m-auto d-flex row">
      {/* Left column */}
      <div className="col-lg-8 col-sm-12 main-container">
        <div/>
        {/* Video player */}
           <VideoPlayer/>

        {/* Main tabs */}
        <MainTabs />
        {/* Main tabs */}
      </div>
      {/* Left column */}

      <div className="col-lg-4  col-sm-12">
        <div id="cColumn" className="right-banners">
          {/* SerriesButtons */}
          <Banners />
          {/* SerriesButtons */}
        </div>
        {/* RecentVideosTabs */}
        <div id="right-tabs">
        <h1 className="title" style={{ borderBottom: "1px solid #0000001a" }}>Recent serries</h1>
          <Playlist />
        </div>

        {/* Pager */}
        <div className="datapager"></div>
      </div>
      {/* RecentVideosTabs */}
    </div>
  );
};
