import React, { useContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Playlist from "../../components/playlist/Playlist";
import { UncontrolledCollapse, Button } from "reactstrap";
import VideoPlayer from "../../components/player/VideoPlayer";
import Banners from "../../components/banners/Banners";
import MainTabs from "../../components/MainTabs";

import { getPlaylist } from "../../utils";
import Filter from "../../components/filter/Filter";
import { useMedia } from "react-media";
import FiltersSidebar from "../../components/FiltersSidebar";

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
    setActivePlaylist,
    series,
    lang,
    setFilterSidebar,
    filterSidebar,
    activePlaylist,
    setVideo,
    activeVideo,
  } = useContext(AppContext);
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });

  let customList = series || [];
  const history = useHistory();

  const onClick = async (e) => {
    const { id } = e.target;
    const result = await getPlaylist(id, lang);

    setActivePlaylist(result);
    // setVideo(result[0]);

    history.push(`?lang=${lang}&search=series&sid=${id}`);
  };

  let query = useQuery();
  console.log("URL-PARAMS", query.values());

  // If serries has childern

  const MultiSerries = (listItem) => {
    if (!series) {
      return null;
    }

    return (
      <>
        <Button
          id={listItem.Name + listItem.ID}
          key={listItem.Name + listItem.ID}
          className="w-100 d-flex"
        >
          {listItem.Name}jjjj
        </Button>
        <UncontrolledCollapse
          style={{ padding: "4px 0px" }}
          toggler={"#" + listItem.Name + listItem.ID}
          onOpened={() => {
            console.log("sdfsdf");
          }}
        >
          {listItem.Series
            ? listItem.Series.map((listItem) => {
                return (
                  <div key={listItem.ID} className="d-flex">
                    <Button
                      id={listItem.ID}
                      className="w-100"
                      onClick={onClick}
                    >
                      {listItem.Name}
                    </Button>
                  </div>
                );
              })
            : null}
        </UncontrolledCollapse>
      </>
    );
  };
  const handleClick = () => {
    setFilterSidebar(!filterSidebar);
  };

  const SerriesList = () => {
    return (
      <div className={isSmallScreen && "small"}>
        <div className="d-flex flex-column  w-100">
          <Filter />
          <Banners />
          {customList.map((listItem) => {
            return (
              // If serries has childern
              listItem.Series ? (
                MultiSerries(listItem)
              ) : (
                <div key={listItem.ID} className="d-flex">
                  <Button id={listItem.ID} onClick={onClick} className="w-100">
                    {listItem.Name}
                  </Button>
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  };
  useEffect(() => {
    console.log("LANG", activePlaylist);

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
    <div>
      {isSmallScreen && (
        <>
          <FiltersSidebar>
            <SerriesList />
          </FiltersSidebar>
        </>
      )}{" "}
      <div className="d-flex row">
        <div className=" col-lg-8 col-sm-12">
          <VideoPlayer />
        </div>
        <div className="col-lg-4  col-sm-12">
          {!isSmallScreen && <MainTabs />}
        </div>
      </div>
      <div className="d-flex flex-wrap mt-2">
        <div className="d-flex right-banners col-lg-3 col-sm-12">
          {!isSmallScreen && <SerriesList />}
        </div>

        <div className="col-lg-9 col-sm-12">
          {isSmallScreen && (
            <Button onClick={handleClick} className="button tonglefilters">
              Filters
            </Button>
          )}
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default AllSeriesPage;
