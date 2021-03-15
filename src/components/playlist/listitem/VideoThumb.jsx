import React from "react";

export default function VideoThumb({ listItem }) {
  return (
    <div className="d-flex justify-content-center">
      <a href="#" className="thump">
        <img
          src={listItem.YouTubeThumb}
          style={{ borderWidth: "0px" }}
          alt="video-thumb"
        />
      </a>
    </div>
  );
}
