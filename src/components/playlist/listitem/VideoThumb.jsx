import React, { useContext } from "react";
import AppContext from '../../AppContext'

export default function VideoThumb({ listItem }) {
  const { setVideo } = useContext(AppContext)
  const YouTubeId = listItem.YouTubeId
  const imagePath = YouTubeId ? `https://i.ytimg.com/vi/${YouTubeId}/hqdefault.jpg` : `http://localhost:3000/static/media/logo.efe8290e.svg`


  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setVideo(listItem)
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="thump" onClick={handleClick}>
        {/* <img
          src={imagePath}
          style={{ borderWidth: "0px", maxWidth: '120px' }}
          alt="video-thumb"
        /> */}
        <div className="image" style={{ backgroundImage: `url(${imagePath})` }}></div>

      </div>
    </div>
  );
}
