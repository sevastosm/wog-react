import React, { useContext } from "react";
import ListItem from "./listitem/ListItem";
import "./Playlist.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import AppContext from "../AppContext";

export default function () {
  const { activePlaylist } = useContext(AppContext);

  console.log("activePlaylist", activePlaylist);

  if (!activePlaylist) return null;
  return (
    <PerfectScrollbar scrollbarXActive={false}>
      <div
        className={"playList"}
        cellSpacing={0}
        cellPadding={5}
        border={0}
        width="100%"
      >
        {activePlaylist.map((sermon) => {
          return <ListItem listItem={sermon} />;
        })}
      </div>
    </PerfectScrollbar>
  );
}
