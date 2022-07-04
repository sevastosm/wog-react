import React, { useContext, useEffect } from "react";
import ListItem from "./listitem/ListItem";
import Loader from "../loader/Loader";
import Skeleton from "../loader/Skeleton";
import UltimatePagination from "./Pagination";
import { getPlaylist } from "../../utils";
import useResources from "../../hooks/UseResources";

import "./Playlist.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import AppContext from "../AppContext";
import { useMedia } from "react-media";

export default function () {
  const {
    activePlaylist,
    loader,
    lang,
    setActivePlaylist,
    activePage,
    setActivepage,
  } = useContext(AppContext);
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });
  const resourses = useResources(["ErrMsgErrorOccuredText"]);
  // return <Skeleton />;

  if (loader) return <Skeleton />;
  if (!activePlaylist?.data) {
    return <Skeleton />;
  } else if (activePlaylist.data.length === 0) {
    return (
      <div className="w-100 text-center">{resourses && resourses[0].Text}</div>
    );
  }

  const handleClick = async (num) => {
    const result = await getPlaylist(
      activePlaylist.data[0].kind,
      activePlaylist.data[0].SeriesID,
      lang,
      num
    );
    // setActivepage(num);
    setActivePlaylist({
      Data: result.data,
      Total: result.total,
      kind: activePlaylist.kind,
      activePage: num,
    });
  };

  return (
    // <PerfectScrollbar scrollbarXActive={false}>
    <div className="col-xs-12 d-flex flex-column">
      {activePlaylist.data && activePlaylist.total > 24 && (
        <div className="align-self-center">
          {!isSmallScreen && (
            <UltimatePagination
              currentPage={parseInt(activePage)}
              totalPages={Math.round(activePlaylist.total / 20)}
              onChange={handleClick}
            />
          )}
        </div>
      )}

      <div
        className={`playList ${isSmallScreen && "small"}`}
        strt
        cellSpacing={0}
        cellPadding={5}
        border={0}
        width="100%"
      >
        {activePlaylist.data.map((sermon, i) => {
          return (
            <span key={i}>
              <ListItem key={sermon.ID} listItem={sermon} />
            </span>
          );
        })}
      </div>
      {activePlaylist.data && activePlaylist.total > 24 && (
        <div className="align-self-center">
          {!isSmallScreen && (
            <UltimatePagination
              currentPage={parseInt(activePage)}
              totalPages={Math.round(activePlaylist.total / 20)}
              onChange={handleClick}
            />
          )}
        </div>
      )}
    </div>
    // </PerfectScrollbar>
  );
}
