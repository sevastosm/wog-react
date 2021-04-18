import React from "react";
import { useGlobalState } from '../../AppContext'

export default function VideoThumb({ listItem }) {
  const {YouTubeId}=listItem
  const {setVideo} = useGlobalState()
  const imagePath = YouTubeId?`https://img.youtube.com/vi/${YouTubeId}/default.jpg`:`http://localhost:3000/static/media/logo.f9e3db88.svg`


  const handleClick=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setVideo(YouTubeId)
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="thump" onClick={handleClick}>
        <img
          src={imagePath}
          style={{ borderWidth: "0px" ,maxWidth:'120px'}}
          alt="video-thumb"
        />
      </div>
    </div>
  );
}
