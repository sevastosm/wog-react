import React, { useContext } from "react";
import ListItem from "./listitem/ListItem";
import Loader from "../loader/Loader";
import "./Playlist.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import AppContext from "../AppContext";
import { useMedia } from "react-media";

export default function () {
  const { activePlaylist, loader } = useContext(AppContext);
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });
  if (loader) return <Loader />;
  if (!activePlaylist) return <Loader />;
  return (
    // <PerfectScrollbar scrollbarXActive={false}>
    <div
      className={`playList ${isSmallScreen && "small"}`}
      strt
      cellSpacing={0}
      cellPadding={5}
      border={0}
      width="100%"
    >
      {activePlaylist.map((sermon) => {
        return <ListItem key={sermon.ID} listItem={sermon} />;
      })}
    </div>
    // </PerfectScrollbar>
  );
}
