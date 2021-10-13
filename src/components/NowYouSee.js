import React, { useContext } from "react";
import AppContext from "./AppContext";

export default function NowYouSee({ listItem }) {
  const { activeVideo } = useContext(AppContext);
  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <div className="info col-lg-8 col-xs-12 pt-1">
      <div className="maintitle">
        <div dangerouslySetInnerHTML={createMarkup(activeVideo.Subject)} />
        {/* <span>{listItem.Subject}</span> */}
      </div>
      <h3 className="title-small">{activeVideo.RecordingDate}</h3>
      <div className="title-small">
        {/* {listItem.RecordingSubject} */}

        <div
          dangerouslySetInnerHTML={createMarkup(activeVideo.RecordingSubject)}
        />
      </div>
    </div>
  );
}
