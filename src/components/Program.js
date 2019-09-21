import React from "react";
import { GetProgram } from "../mocks/mocks";
import { AppContext } from "./AppContext";

let list = GetProgram.Data;



const Program = () => {
  return (
    <AppContext.Consumer>
      {({ tonggleAllSeries }) => (
        <div className="d-flex">

          <div className="d-flex flex-column w-100">
            <div><h3>Προγραμμα Σταθμού</h3></div>
            <div>{list.datesAndName[0].dateName}</div>
            <div>{list.datesAndName[0].date }</div>

            {list.timetable.map(listItem => {
                let s = listItem.date
                let s1 = s.substring(s.indexOf("T")+1);
                s1.trim();
              return (
                <div className="d-flex flex-column">
                 <div>{s1} : </div><div dangerouslySetInnerHTML={{__html:listItem.text}} />
                </div>
              );
            })}
         
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Program;
