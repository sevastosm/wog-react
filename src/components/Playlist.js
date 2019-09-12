import React from "react";
import { GetRecent } from "../mocks/mocks";

let customList = [];
let list = GetRecent.Data;

// list.map(serie => {
//   if (serie.ID === 13) {
//     customList.push(serie);
//   }
//   if (serie.ID === 6) {
//     serie.Series.map(seriey => {
//       if (seriey.ID === 110) {
//         customList.push(seriey);
//       }
//     });
//   }
//   if (serie.ID === 9) {
//     serie.Series.map(seriey => {
//       if (seriey.ID === 121 || seriey.ID === 92 || seriey.ID === 67) {
//         customList.push(seriey);
//       }
//     });
//   }
// });

const Playlist = () => {
  console.log(list);
  return (
    <div>
      {list.map(listItem => {
        console.log(listItem);
        return (
          <div key={listItem.Subject}>
            <span>{listItem.RecordingSubject}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Playlist;
