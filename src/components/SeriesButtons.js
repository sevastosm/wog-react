import React from "react";
import { GetSeries } from "../mocks/mocks";
import { AppContext } from "./AppContext";
import { Link } from 'react-router-dom'

import routes from '../constants/constants'

let customList = [];
let list = GetSeries.Data;

list.map(serie => {
  if (serie.ID === 13) {
    customList.push(serie);
  }
  if (serie.ID === 6) {
    serie.Series.map(seriey => {
      if (seriey.ID === 110) {
        customList.push(seriey);
      }
    });
  }
  if (serie.ID === 9) {
    serie.Series.map(seriey => {
      if (seriey.ID === 121 || seriey.ID === 92 || seriey.ID === 67) {
        customList.push(seriey);
      }
    });
  }
});

const SeriesButtons = () => {
  return (
    <AppContext.Consumer>
      {( appState ) => (
        <div className="d-flex">
          <div className="d-flex flex-column w-100">
            {customList.map(listItem => {
              return (
                <div key={listItem.ID} className="adv d-flex">
                  <a
                    href=""
                    id="ctl00_main_adv1"
                  >
                    {listItem.Name} 
                  </a>
                </div>
              );
            })}
            {/* More Series */}
            <div className="adv d-flex">
              <Link to={routes.ALL_SERIES} id="ctl00_main_adv1">
              All Series
                {/* {listItem.Name} */}
              </Link>
            </div>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default SeriesButtons;
// onClick={appState.actions.tonggleAllSeries} 