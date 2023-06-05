import React from "react";
import { useMedia } from "react-media";

import AppContext from "../AppContext";
import "./Banners.scss";




export default function Banners() {
  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
  const {
    ads
  } = React.useContext(AppContext);
  
  if(isSmallScreen) return null
  console.log("ADS",ads)
  // if (!ads) return null
  const path ="https://www.wordofgod.gr"

  return <div className="d-flex flex-wrap mb-3 banners">
    {ads.map((a,i)=>  <div key={i} className=" d-flex justify-content-center">
      <a id="ctl00_main_adv1" title={a.Text}
       href={path+a.Link} target="_blank"><img title={a.Text} src={path+"/"+a.Image} alt="" /></a>
    </div>
      
    )}
  </div>
}