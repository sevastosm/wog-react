import React, { useContext } from "react";
import Playlist from "../../components/playlist/Playlist";
import { UncontrolledCollapse } from "reactstrap";
import VideoPlayer from "../../components/player/VideoPlayer";
import { Button } from "reactstrap";
import { getPlaylist } from "../../utils";
import { useMedia } from "react-media";
import FiltersSidebar from "../../components/FiltersSidebar";

import "./AllSeriesPage.scss";
import AppContext from "../../components/AppContext";

const AllSeriesPage = () => {
  const { setActivePlaylist, series, lang, setFilterSidebar, filterSidebar } =
    useContext(AppContext);
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });

  let customList = series || [];

  const onClick = async (e) => {
    const { id } = e.target;
    const result = await getPlaylist(id, lang);

    setActivePlaylist(result);
    // setVideo(result[0]);
  };

  // If serries has childern

  const MultiSerries = (listItem) => {
    if (!series) {
      return null;
    }

    return (
      <>
        <div
          id={listItem.Name + listItem.ID}
          key={listItem.Name + listItem.ID}
          className="adv button w-100 d-flex"
        >
          <span>{listItem.Name}</span>
        </div>
        <UncontrolledCollapse
          style={{ padding: "4px 0px" }}
          toggler={"#" + listItem.Name + listItem.ID}
        >
          {listItem.Series
            ? listItem.Series.map((listItem) => {
                return (
                  <div key={listItem.ID} className="adv d-flex">
                    <Button
                      id={listItem.ID}
                      className="button w-100"
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
          {/* <Filter /> */}
          {customList.map((listItem) => {
            return (
              // If serries has childern
              listItem.Series ? (
                MultiSerries(listItem)
              ) : (
                <div key={listItem.ID} className="adv d-flex">
                  <Button
                    id={listItem.ID}
                    onClick={onClick}
                    className="button w-100"
                  >
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

  return (
    <div>
      {isSmallScreen && (
        <>
          <FiltersSidebar>
            <SerriesList />
          </FiltersSidebar>
        </>
      )}{" "}
      <div>
        <div className="col-sm-12">
          <VideoPlayer />
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
