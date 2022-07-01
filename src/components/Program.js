import React, { useContext } from "react";
import { convertDate } from "../utils";
import AppContext from "../components/AppContext";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Program() {
  const { program } = useContext(AppContext);
  if (!program) {
    return null;
  }

  const { Data } = program;

  const date = convertDate(Data.DatesAndName[0]?.Date);
  return (
    <PerfectScrollbar scrollbarXActive={false} style={{ maxHeight: "400px" }}>
      <div className="d-flex">
        <div className="d-flex flex-column w-100">
          <div>{Data.DatesAndName[0]?.DateName}</div>
          <div>{date}</div>

          {Data.Timetable.map((listItem, index) => {
            let s = listItem.Date;
            let s1 = s.substring(s.indexOf("T") + 1);
            s1.trim();
            return (
              <span key={index} className="d-flex flex-column">
                <span>{s1}</span>
                <span dangerouslySetInnerHTML={{ __html: listItem.Text }} />
              </span>
            );
          })}
        </div>
      </div>
    </PerfectScrollbar>
  );
}
