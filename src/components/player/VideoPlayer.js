import React, { useContext } from "react";
import "./VideoPlayer.scss";
import YouTube from "react-youtube";
import { useMedia } from "react-media";

import AppContext from "../AppContext";

export default function VideoPlayer() {
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });

  const { activeVideo } = useContext(AppContext);
  const getVideo = React.useCallback(
    () =>
      `https://www.youtube.com/embed/${activeVideo.YouTubeId}?autoplay=1?rel=0`,
    [activeVideo]
  );

  if (!activeVideo) return null;

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    console.log("event", event);
    document.getElementById("ut-player").click();
    event.target.playVideoAt(0);
  };

  const opts = {
    height: "360",
    width: "640",
    allowfullscreen: "true",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      allow: "autoplay",
    },
  };

  return (
    <YouTube
      id="ut-player"
      videoId={activeVideo.YouTubeId}
      opts={opts}
      // onReady={onPlayerReady}
    />
  );

  return (
    <div>
      {/* Start of Player */}
      <iframe
        id="ut-player"
        className={isSmallScreen && "small"}
        width={640}
        height={360}
        src={getVideo()}
        title="YouTube video player"
        frameborder="0"
        // allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      ></iframe>
      {/* End of Player */}
    </div>
  );
}
