import React from "react";
import "./VideoPlayer.scss";
import { useGlobalState } from '../AppContext'


export default function VideoPlayer() {


  const state = useGlobalState()

  console.log(state.state)


  const getVideo =React.useCallback(()=>`https://www.youtube.com/embed/${state.state.activeVideo}?autoplay=1`,[state])


if(!state) return null


  return (
    <div>
      {/* Start of Player */}
      {/* <iframe
        id="ut-player"
        frameBorder={0}
        allowFullScreen={1}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        width={640}
        height={360}
        src="https://www.youtube.com/embed/_40O8BbkhGE?rel=0&hl=el&enablejsapi=1&origin=http%3A%2F%2Fwww.wordofgod.gr&widgetid=1?autoplay=1"
      /> */}

      <iframe
        id="ut-player"
        width={640}
        height={360}
        src={getVideo()}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* End of Player */}
    </div>
  );
}
