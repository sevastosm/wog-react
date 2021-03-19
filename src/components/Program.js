import React from "react";
import { GetProgram } from "../mocks/mocks";
import AppContext from "./AppContext";

let list = GetProgram.Data;
export default function Program (){
  return (
    <AppContext.Consumer>
      {(appState) => (
        <div className="d-flex">
          <div className="d-flex flex-column w-100">
            <div>{list.datesAndName[0].dateName}</div>
            <div>{list.datesAndName[0].date }</div>

            {list.timetable.map((listItem, index) => {
                let s = listItem.date
                let s1 = s.substring(s.indexOf("T")+1);
                s1.trim();
              return (
                <span key={index} className="d-flex flex-column">
                <span dangerouslySetInnerHTML={{__html:listItem.text}} />
                </span>
              );
            })}

          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};
