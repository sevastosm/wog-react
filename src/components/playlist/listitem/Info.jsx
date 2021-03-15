import React from "react";

export default function Info({listItem}) {
  return (
    <div className="info col-lg-8 col-xs-12 pt-1">
      <h3 className="title-small">{listItem.RecordingDate}</h3>
      <div className="title-small">{listItem.RecordingSubject}</div>
      <div className="maintitle">
        <span>{listItem.Subject}</span>
      </div>
    </div>
  );
}
