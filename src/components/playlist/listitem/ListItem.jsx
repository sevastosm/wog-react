import React from "react";
import Info from "./Info";
import VideoThumb from "./VideoThumb";
import Buttons from "./Buttons";

export default function ({ listItem }) {
  return (
    <div key={listItem.RecordingID}>
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
