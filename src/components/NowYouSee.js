import React, { useContext } from "react";
import { convertDate } from "../utils";
import AppContext from "./AppContext";

export default function NowYouSee({ listItem }) {
  const { activeVideo } = useContext(AppContext);
  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <div className="info col-xs-12 pt-1">
      <h3 className="title-small">{convertDate(activeVideo?.RecordingDate)}</h3>
      <div className="maintitle">
        <div dangerouslySetInnerHTML={createMarkup(activeVideo?.Subject)} />
      </div>
      <div
        dangerouslySetInnerHTML={createMarkup(activeVideo?.RecordingSubject)}
      />
    </div>
  );
}
