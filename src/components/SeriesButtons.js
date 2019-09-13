import React from "react";
import { GetSeries } from "../mocks/mocks";

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
  console.log(list);
  return (
    <div className="d-flex">
      <div className="d-flex flex-column w-100">
        {customList.map(listItem => {
          console.log(listItem);
          return (
            <div key={listItem.ID} className="adv d-flex">
              <a
                href="javascript:__doPostBack('ctl00$main$adv1','')"
                onclick="_setRecordingsSeries('serieid=110');return false;"
                id="ctl00_main_adv1"
              >
                Button Series
                {/* {listItem.Name} */}
              </a>
            </div>
          );
        })}
        {/* More Series */}
        <div className="adv d-flex">
          <a
            href="javascript:__doPostBack('ctl00$main$adv1','')"
            onclick="_setRecordingsSeries('serieid=110');return false;"
            id="ctl00_main_adv1"
          >
            More Series
            {/* {listItem.Name} */}
          </a>
        </div>
      </div>
    </div>
  );
};
export default SeriesButtons;
