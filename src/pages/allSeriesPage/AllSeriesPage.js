import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Playlist from "../../components/playlist/Playlist";
import SeriesList from "../../components/playlist/SeriesList";
import VideoPlayer from "../../components/player/VideoPlayer";
import MainTabs from "../../components/MainTabs";
import { useMedia } from "react-media";
import FiltersSidebar from "../../components/FiltersSidebar";
import useResources from "../../hooks/UseResources";

import "./AllSeriesPage.scss";
import AppContext from "../../components/AppContext";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AllSeriesPage = () => {
  const {
    lang,
    setFilterSidebar,
    filterSidebar,
    activePlaylist,
    setVideo,
    activeVideo,
  } = useContext(AppContext);
  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
  const resourses = useResources(["tabRecordingsSeriesHdr"]);

  let query = useQuery();
  console.log("URL-PARAMS", query.values());

  const handleClick = () => {
    setFilterSidebar(!filterSidebar);
  };

  useEffect(() => {
    setVideo({
      YouTubeId: "ENn6RLC0wpo",
      Subject: "LIVE",
      RecordingSubject: "Live streaming from youtube",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("LANG", activePlaylist);

    // activePlaylist && setVideo(activePlaylist[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, activePlaylist, activeVideo]);

  return (
    <div className="p-2">
      {/* {isSmallScreen && (
        <>
          <FiltersSidebar>
            <SeriesList />
          </FiltersSidebar>
        </>
      )} */}
      <div className="d-flex row mx-0">
        <div className=" col-lg-8 col-sm-12">
          <VideoPlayer />
        </div>
        <div className="col-lg-4  col-sm-12 position-relative">
          {!isSmallScreen && <MainTabs />}
        </div>
      </div>
      <div className="d-flex flex-wrap mt-2">
        <div className="d-flex col-lg-2 col-sm-12">
          {!isSmallScreen && <SeriesList />}
        </div>

        <div className="col-lg-9 col-sm-12 m-auto">
          {/* {isSmallScreen && (
            <button onClick={handleClick} className="button tonglefilters">
              {resourses.length > 0 && resourses[0].Text}
            </button>
          )} */}
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default AllSeriesPage;
