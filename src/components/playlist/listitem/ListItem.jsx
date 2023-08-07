import React, { useContext } from "react";
import { convertDate } from "../../../utils";

import Info from "./Info";
import VideoThumb from "./VideoThumb";
import Buttons from "./Buttons";
import AppContext from "../../AppContext";

import Truncate from 'react-truncate';

export default function ({ listItem }) {

  const { activeVideo, setVideo } = useContext(AppContext);
  function createMarkup(content) {


    return { __html: content };
  }
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setVideo(listItem)
  }

  return (
    <div
      title={listItem.RecordingSubject}
      onClick={handleClick}
      className={`listItem mx-3 ${listItem?.RecordingID === activeVideo?.RecordingID ? "active" : ""}`} key={listItem?.RecordingID}>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex">
          <div className="col-xs-12 d-flex flex-column">
            <VideoThumb listItem={listItem} />

          </div>
        </div>
        <div className="title-small w-100 p-2 ">
      <h3>{convertDate(listItem.RecordingDate)}</h3>
          <div dangerouslySetInnerHTML={createMarkup(listItem?.Subject)} />

          {/* <Info listItem={listItem} /> */}
          <Truncate lines={3} ellipsis={<span>...</span>}>
            {<div dangerouslySetInnerHTML={createMarkup(listItem?.RecordingSubject)} />}
          </Truncate>

        </div>
      </div>
    </div>
  );
}
