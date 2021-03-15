import React from "react";
import "./VideoPlayer.scss"

export default function VideoPlayer(){
  return (
    <div>
    {/* Start of Player */}
    <iframe id="ut-player" frameBorder={0} allowFullScreen={1}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    title="YouTube video player" width={640} height={360}
    src="https://www.youtube.com/embed/yFCzceyW3jM?rel=0&hl=el&enablejsapi=1&origin=http%3A%2F%2Fwww.wordofgod.gr&widgetid=1" />
    {/* End of Player */}
  </div>
  )
}