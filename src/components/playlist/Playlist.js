import React, { useContext } from "react";
import ListItem from "./listitem/ListItem";
import Loader from "../loader/Loader";
import UltimatePagination from "./Pagination";
import { getPlaylist } from "../../utils";

import "./Playlist.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import AppContext from "../AppContext";
import { useMedia } from "react-media";

export default function () {
  const { activePlaylist, loader, lang, setActivePlaylist } =
    useContext(AppContext);
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });
  const [activePage, setActivepage] = React.useState(1);
  if (loader) return <Loader />;
  if (!activePlaylist?.data) return <Loader />;

  console.log("activePlaylist", activePlaylist);

  const handleClick = async (num) => {
    const result = await getPlaylist(
      activePlaylist.data[0].SeriesID,
      lang,
      num
    );
    setActivePlaylist(result);

    setActivepage(num);
  };

  return (
    // <PerfectScrollbar scrollbarXActive={false}>
    <div className="col-xs-12 d-flex flex-column">
      {activePlaylist.data && activePlaylist.total > 20 && (
        <div className="align-self-center">
          <UltimatePagination
            currentPage={activePage}
            totalPages={Math.round(activePlaylist.total / 20)}
            onChange={handleClick}
          />
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
        {activePlaylist.data.map((sermon) => {
          return <ListItem key={sermon.ID} listItem={sermon} />;
        })}
      </div>
    </div>
    // </PerfectScrollbar>
  );
}
