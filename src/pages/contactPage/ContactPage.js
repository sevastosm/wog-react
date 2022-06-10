import React, { useContext, useMemo } from "react";
import useGlobaState from "../../components/AppContext";
// import { useLocation } from "react-router-dom";

export default function ContactPage() {
  // const { text, dispatch } = useGlobaState();
  // let location = useLocation();

  // const getNameFromLocation = useMemo(() => {
  //   return location.pathname;
  //   if (location.pathname === "/contact") {
  //     return "Επικοινωνία";
  //   }
  // }, [location]);

  return (
    <div>
      {/* <h3>{getNameFromLocation}</h3> */}
      <h3>Contact</h3>
      {/* <button onClick={() => dispatch({ type: "1" })}>action 1</button>
      <button onClick={() => dispatch({ type: "2" })}>action 2</button> */}
    </div>
  );
}
