import React, { useContext } from "react";
import "./VideoPlayer.scss";
import YouTube from "react-youtube";
import { useMedia, } from "react-media";

import AppContext from "../AppContext";
import { useEffect } from "react";

export default function VideoPlayer() {
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });
  const [video,setVideo]=React.useState("")

  const { activeVideo } = useContext(AppContext);
  const getVideo = React.useCallback(
    () =>
      `https://youtu.be/embed/${activeVideo.YouTubeId}?autoplay=1?rel=0`,
    [activeVideo]
  );

  if (!activeVideo) return null;

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    document.getElementById("ut-player").click();
    event.target.playVideoAt(0);
  };

  const opts = {
    height: "360",
    width: "640",
    allowfullscreen: "true",
    rel: 0,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
      ,
      allow: "autoplay",
    },
  };

//   useEffect(()=>{
// setVideo(activeVideo?.YouTubeId)
//   },[activeVideo])

  return (
    <YouTube
      id="ut-player"
      // className={isSmallScreen && "small"}
      videoId={video}
      opts={opts}
      // onReady={onPlayerReady}
    />
  );
}
