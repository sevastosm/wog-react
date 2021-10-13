import React, { useContext } from "react";
import Info from "./Info";
import VideoThumb from "./VideoThumb";
import Buttons from "./Buttons";
import AppContext from "../../AppContext";


export default function ({ listItem }) {

  const { activeVideo, setVideo } = useContext(AppContext);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setVideo(listItem)
  }

  return (
    <div
      onClick={handleClick}
      className={`listItem ${listItem.RecordingID === activeVideo.RecordingID ? "active" : ""}`} key={listItem.RecordingID}>
      <div className="d-flex mb-3">
        <div className="col-xs-12 d-flex flex-column ">
          <VideoThumb listItem={listItem} />
          <Buttons />
        </div>
        <Info listItem={listItem} />
      </div>
    </div>
  );
}
