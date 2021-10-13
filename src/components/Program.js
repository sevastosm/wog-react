import React, { useContext } from "react";
import AppContext from "../components/AppContext";

export default function Program() {
  const { program } = useContext(AppContext);
  if (!program) {
    return null;
  }

  console.log("program", program);

  const { Data } = program;

  return (
    <div className="d-flex">
      <div className="d-flex flex-column w-100">
        <div>{Data.DatesAndName[0].DateName}</div>
        <div>{Data.DatesAndName[0].Date}</div>

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
  );
}
