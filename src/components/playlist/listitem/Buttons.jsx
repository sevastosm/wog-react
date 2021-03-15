import React from "react";
import { ReactComponent as Arrow } from "../../../Assets/arrow.svg";
import { ReactComponent as Listen } from "../../../Assets/listen.svg";
import { ReactComponent as Download } from "../../../Assets/download.svg";

export default function Buttons() {
  return (
    <div className="playlist-downloads d-flex align-items-cente justify-content-between">
      <div className="action-icon" data-type="svg">
        <Arrow />
      </div>
      <div className="action-icon" data-type="svg">
        <Listen />
      </div>
      <div className="action-icon" data-type="svg">
        <Download />
      </div>
    </div>
  );
}
