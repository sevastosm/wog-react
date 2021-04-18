import React from "react";
import { useParams } from "react-router-dom";
import Banners from "../../components/banners/Banners";
import Playlist from "../../components/playlist/Playlist";
import MainTabs from "../../components/MainTabs";
import VideoPlayer from "../../components/player/VideoPlayer";
import { getHomeData } from "../../utils";
export default function HomePage() {
  const { lang } = useParams();

  const [homeData, setHomeData] = React.useState({
    program: null,
    series: null,
  });

  React.useEffect(() => {
    getHomeData(lang).then((data) =>
      setHomeData({ series: data[0].Data, program: data[1].Data })
    );
  }, [lang]);

  return (
    <div className="m-auto d-flex row">
      <div className="col-lg-8 col-sm-12 main-container">
        <div />
        {/* Video player */}
        <VideoPlayer />

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
          <h1 className="title" style={{ borderBottom: "1px solid #0000001a" }}>
            Recent serries
          </h1>
          <Playlist sermons={homeData.series} />
        </div>

        {/* Pager */}
        <div className="datapager"></div>
      </div>
      {/* RecentVideosTabs */}
    </div>
  );
}
