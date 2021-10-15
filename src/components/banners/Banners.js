import React, { useContext } from "react";
import { GetSeries } from "../../mocks/mocks";
import { useParams } from "react-router-dom";
import { useMedia } from "react-media";

import AppContext from "../AppContext";
import { Link } from "react-router-dom";
import "./Banners.scss";
import { route } from "../../constants";
import { applicationLang, getPlaylist } from "../../utils";
import useResources from "../../hooks/UseResources";

let customList = [];
let list = GetSeries.Data;

list.map((serie) => {
  if (serie.ID === 13) {
    customList.push(serie);
  }
  if (serie.ID === 6) {
    serie.Series.map((seriey) => {
      if (seriey.ID === 110) {
        customList.push(seriey);
      }
    });
  }
  if (serie.ID === 9) {
    serie.Series.map((seriey) => {
      if (seriey.ID === 121 || seriey.ID === 92 || seriey.ID === 67) {
        customList.push(seriey);
      }
    });
  }
});

export default function Banners() {
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });

  const { setActivePlaylist, lang } = useContext(AppContext);
  const resourses = useResources("tabRecordingsSeriesHdr");

  const handeClick = async (id) => {
    const result = await getPlaylist(id, lang);
    setActivePlaylist(result);
  };

  return (
    <div className="d-flex">
      <div className="d-flex flex-column w-100">
        {lang === "el" &&
          customList.map((listItem) => {
            return (
              <div
                onClick={() => handeClick(listItem.ID)}
                key={listItem.ID}
                className={`d-flex banner
                ${isSmallScreen && "small"}`}
              >
                {listItem.Name}
              </div>
            );
          })}
        {/* More Series */}
        <div
          className={`d-flex banner 
         ${isSmallScreen && "small"}`}
        >
          <Link
            to={`${applicationLang()}/${route.ALL_SERIES}/`}
            id="ctl00_main_adv1 button"
          >
            {resourses?.Text}
          </Link>
        </div>
      </div>
    </div>
  );
}

// onClick={appState.actions.tonggleAllSeries}
