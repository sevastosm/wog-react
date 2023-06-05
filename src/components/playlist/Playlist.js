import React, { useContext, useEffect } from "react";
import ListItem from "./listitem/ListItem";
import Loader from "../loader/Loader";
import Skeleton from "../loader/Skeleton";
import UltimatePagination from "./Pagination";
import { getPlaylist } from "../../utils";
import useResources from "../../hooks/UseResources";
import { Button } from "reactstrap";

import "./Playlist.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import AppContext from "../AppContext";
import { useMedia } from "react-media";

export default function ({ list, title, simple = false }) {
  const {
    loader,
    lang,
    setActivePlaylist,
    activePage,
  } = useContext(AppContext);
  console.log("LIST", list)
  const activePlaylist = { ...list }
  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
  const isMobile = useMedia({ query: "(max-width: 480px)" });

  const resourses = useResources(["ErrMsgErrorOccuredText", "ImageReturnToLive"]);
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
    <div className="col-xs-12 d-flex flex-column mb-4">
      <h1 className="p-3">{title}</h1>

      <div className="d-flex mb-3">
        {simple && <Button onClick={() => setActivePlaylist([])} className="back-btn">
          {resourses && resourses[1].Text}
        </Button>}
        {activePlaylist.data && activePlaylist.total > 24 && (
          <div className="align-self-center m-auto">
            {!isMobile && (
              <UltimatePagination
                currentPage={parseInt(activePage)}
                totalPages={Math.round(activePlaylist.total / 20)}
                onChange={handleClick}
              />
            )}
          </div>
        )}
      </div>
      <PerfectScrollbar >
        <div
          className={`playList ${simple && 'simple'} ${isSmallScreen && "small"}`}
          strt
          cellSpacing={0}
          cellPadding={5}
          border={0}
          width="100%"
        >
          {activePlaylist.data.map((sermon, i) => {
            return (
              // <span key={i}>
              <ListItem key={sermon.ID} listItem={sermon} />
              // </span>
            );
          })}
        </div>
      </PerfectScrollbar>
      {activePlaylist.data && activePlaylist.total > 24 && (
        <div className="align-self-center m-auto">
          {!isMobile && (
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
