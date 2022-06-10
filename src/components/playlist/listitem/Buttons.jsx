import React, { useContext } from "react";
import { ReactComponent as Arrow } from "../../../Assets/arrow.svg";
import { ReactComponent as Listen } from "../../../Assets/listen.svg";
import { ReactComponent as Download } from "../../../Assets/download.svg";
import AppContext from "../../AppContext";

export default function Buttons({ listItem }) {
  const [audio, setAudio] = React.useState(false)

  const { activeVideo, setVideo } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAudio(true)
  }

  return (
    <div className="playlist-downloads d-flex align-items-cente justify-content-between">
      <div className="action-icon" data-type="svg">
        <Arrow />
      </div>
      <div className="action-icon" data-type="svg">
        <div onClick={handleClick}><Listen /></div>
      </div>
      <div className="action-icon" data-type="svg">
        <Download />
      </div>

      {audio && <audio controls>
        <source src={activeVideo.MP3Path} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>}
    </div>
  );
}
