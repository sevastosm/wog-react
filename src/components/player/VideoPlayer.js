import React, { useContext } from "react";
import "./VideoPlayer.scss";
import AppContext from "../AppContext";

export default function VideoPlayer() {
  const { activeVideo } = useContext(AppContext);
  const getVideo = React.useCallback(
    () => `https://www.youtube.com/embed/${activeVideo.YouTubeId}?autoplay=1`,
    [activeVideo]
  );

  if (!activeVideo) return null;

  return (
    <div>
      {/* Start of Player */}
      <iframe
        id="ut-player"
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
