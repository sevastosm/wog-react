import React, { useContext } from "react";
import "./VideoPlayer.scss";
import YouTube from "react-youtube";
import { useMedia } from "react-media";

import AppContext from "../AppContext";
import { useEffect } from "react";

export default function VideoPlayer() {
  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
  const [video, setVideo] = React.useState("");

  const { activeVideo } = useContext(AppContext);
  console.log("ACTIVE", activeVideo);
  const getVideo = React.useCallback(
    () => `https://youtu.be/embed/${activeVideo.YouTubeId}?autoplay=1?rel=0`,
    [activeVideo]
  );

  if (!activeVideo) return null;

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    if (activeVideo.YouTubeId) event.target.unMute();
    event.target.playVideo();
  };

  const opts = {
    height: "360",
    width: "640",
    allowfullscreen: "true",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      rel: 0,
      autoplay: 1,
      mute: 1,
    },
  };

  //   useEffect(()=>{
  // setVideo(activeVideo?.YouTubeId)
  //   },[activeVideo])

  return (
    activeVideo?.YouTubeId && (
      <YouTube
        id="ut-player"
        // className={isSmallScreen && "small"}
        videoId={activeVideo.YouTubeId}
        opts={opts}
        onReady={onPlayerReady}
      />
    )
  );
}
