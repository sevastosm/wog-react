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
    <div>
      {customList.map(listItem => {
        console.log(listItem);
        return (
          <div key={listItem.ID}>
            <h3>{listItem.Name}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default SeriesButtons;
