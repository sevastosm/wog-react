import React from "react";
import  ListItem from "./listitem/ListItem"
import "./Playlist.scss"

export default function ({sermons}) {

  console.log("recet sermons",sermons)
  if (!sermons) return null
  return (
    <div
      cellSpacing={0}
      cellPadding={5}
      border={0}
      width="100%"
    >
      {sermons.map((sermon) => {
        return (
          <ListItem listItem={sermon} />
        );
      })}
    </div>
  );
}
