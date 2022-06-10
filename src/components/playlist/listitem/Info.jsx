import React from "react";
import Truncate from 'react-truncate';

export default function Info({ listItem }) {
  function createMarkup(content) {


    return { __html: content };
  }

  return (
    <div className="info col-lg-6 col-xs-12 pt-1 mx-4">
      <h3 className="title-small">{listItem.RecordingDate}</h3>
      <div className="maintitle">
        <div dangerouslySetInnerHTML={createMarkup(listItem.Subject)} />
      </div>
      <div className="title-small">
        <Truncate lines={4} ellipsis={<span>...</span>}>
          {<div dangerouslySetInnerHTML={createMarkup(listItem.RecordingSubject)} />}
        </Truncate>
      </div>

    </div>
  );
}
