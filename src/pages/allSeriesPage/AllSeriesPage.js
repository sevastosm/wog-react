import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Playlist from "../../components/playlist/Playlist";
import SeriesList from "../../components/playlist/SeriesList";
import VideoPlayer from "../../components/player/VideoPlayer";
import UltimatePagination from "../../components/playlist/Pagination";
import { getPlaylist } from "../../utils";
import Skeleton from "../../components/loader/Skeleton";


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
    activePage,
    setActivePlaylist,
  } = useContext(AppContext);
  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
  const isMobile = useMedia({ query: "(max-width: 480px)" });

  const resourses = useResources(["tabRecordingsSeriesHdr"]);

  let query = useQuery();

  useEffect(() => {
    setVideo({
      YouTubeId: "ENn6RLC0wpo",
      Subject: "YouTube chanel",
      RecordingSubject: "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // activePlaylist && setVideo(activePlaylist[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, activePlaylist, activeVideo]);

  const handlePagination = async (num) => {
    const result = await getPlaylist(
      activePlaylist.data[0].kind,
      activePlaylist.data[0].SeriesID,
      lang,
      num
    );
    setActivePlaylist({
      Data: result.data,
      Total: result.total,
      kind: activePlaylist.kind,
      activePage: num,
    });
  };

  const cls = isMobile
    ? "col-lg-8 col-sm-12 d-flex flex-column paginate-small"
    : "col-lg-8 col-sm-12 d-flex flex-column";

  let cls2 = "";

  if (!isMobile) {
    cls2 = "col-lg-9 col-sm-12 series-wraper";
  }
  if (isMobile) {
    cls2 = "col-lg-9 col-sm-12 series-wraper series-list-small";
  }
  if (isMobile && activePlaylist.data && activePlaylist.total > 24) {
    cls2 = "col-lg-9 col-sm-12 series-wraper series-list-small-pager";
  }

  return (
    <div className="p-2">
      <div className="d-flex row mx-0 justify-content-center">
        <div className={cls}>
          <VideoPlayer />
          {isMobile && activePlaylist.data && activePlaylist.total > 24 && (
            <div className="align-self-center">
              <UltimatePagination
                currentPage={parseInt(activePage)}
                totalPages={Math.round(activePlaylist.total / 20)}
                onChange={handlePagination}
              />
            </div>
          )}
        </div>
        <div className="col-lg-4  col-sm-12 position-relative">
           <MainTabs />
        </div>
      </div>
      <div className="d-flex flex-wrap mt-2">
        <div className="d-flex col-lg-2 col-sm-12">
          {!isSmallScreen && <SeriesList />}
        </div>

        <div className={cls2}>
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default AllSeriesPage;
