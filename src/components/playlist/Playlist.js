import React from "react";
import { GetRecent } from "../../mocks/mocks";
import  ListItem from "./listitem/ListItem"
import "./Playlist.scss"

let list = GetRecent.Data;

export default function () {
  return (
    <div
      cellSpacing={0}
      cellPadding={5}
      border={0}
      width="100%"
    >
      {list.map((listItem) => {
        return (
          <ListItem listItem={listItem} />
        );
      })}
    </div>
  );
}
