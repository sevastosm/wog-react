import React from "react";
import Truncate from 'react-truncate';

export default function Info({ listItem }) {
  function createMarkup(content) {


    return { __html: content };
  }

  return (
    <div className="info col-lg-8 col-xs-12 pt-1">
      <div className="maintitle">
        <div dangerouslySetInnerHTML={createMarkup(listItem.Subject)} />
      </div>
      <h3 className="title-small">{listItem.RecordingDate}</h3>
      <div className="title-small">
        <Truncate lines={4} ellipsis={<span>...Read more</span>}>
          {<div dangerouslySetInnerHTML={createMarkup(listItem.RecordingSubject)} />}
        </Truncate>
      </div>

    </div>
  );
}
