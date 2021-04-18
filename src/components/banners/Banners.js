import React from "react";
import { GetSeries } from "../../mocks/mocks";
import {
  useParams,
} from "react-router-dom";
import AppContext from "../AppContext";
import { Link } from "react-router-dom";
import "./Banners.scss";
import {route} from "../../constants"
import {applicationLang} from '../../utils'

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
  const handleClick=(id)=>localStorage.setItem('lang',id)
  return (
    <AppContext.Consumer>
      {(appState) => (
        <div className="d-flex">
          <div className="d-flex flex-column w-100">
            {customList.map((listItem) => {
              return (
                <div key={listItem.ID} className="d-flex button">
                  <a href="" >
                    {listItem.Name}
                  </a>
                </div>
              );
            })}
            {/* More Series */}
            <div className="banner d-flex">
              <Link onClick={()=>handleClick(applicationLang())} to={`${applicationLang()}/${route.ALL_SERIES}/`} id="ctl00_main_adv1 button">
                All Series
                {/* {listItem.Name} */}
              </Link>
            </div>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}

// onClick={appState.actions.tonggleAllSeries}
