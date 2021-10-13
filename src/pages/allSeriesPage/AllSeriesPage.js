import React, { useContext } from "react";
import Playlist from "../../components/playlist/Playlist";
import { GetSeries } from "../../mocks/mocks";
import { UncontrolledCollapse } from "reactstrap";
import VideoPlayer from "../../components/player/VideoPlayer";
import { Button } from "reactstrap";
import { getPlaylist } from "../../utils";

import "./AllSeriesPage.scss";
import AppContext from "../../components/AppContext";

let customList = GetSeries.Data;

const AllSeriesPage = () => {
  const { setActivePlaylist, setVideo } = useContext(AppContext);

  const onClick = async (e) => {
    const { id } = e.target;
    const result = await getPlaylist(id);

    setActivePlaylist(result);
    // setVideo(result[0]);
  };

  // If serries has childern

  const MultiSerries = (listItem) => {
    return (
      <div>
        <div id={listItem.Name + listItem.ID} className="adv d-flex">
          <a id="ctl00_main_adv1">{listItem.Name}</a>
        </div>
        <UncontrolledCollapse
          style={{ padding: "4px 0px" }}
          toggler={"#" + listItem.Name + listItem.ID}
        >
          {listItem.Series.map((listItem) => {
            return (
              <div key={listItem.ID} className="adv d-flex">
                <Button id={listItem.ID} className="button" onClick={onClick}>
                  {listItem.Name}
                </Button>
              </div>
            );
          })}
        </UncontrolledCollapse>
      </div>
    );
  };

  return (
    <div>
      {" "}
      <div>
        <div className="col-lg-9 col-sm-12">
          <VideoPlayer />
        </div>
      </div>
      <div className="d-flex flex-wrap mt-2">
        <div className="d-flex right-banners col-lg-3 col-sm-12">
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
                      className="button"
                    >
                      {listItem.Name}
                    </Button>
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="col-lg-9 col-sm-12">
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default AllSeriesPage;
