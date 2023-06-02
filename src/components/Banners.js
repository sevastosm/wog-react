import React from "react";
import AppContext from "./AppContext";



export default function Banners() {

  const {
    ads
  } = React.useContext(AppContext);

  console.log("ADS",ads)
  // if (!ads) return null
  const path ="https://www.wordofgod.gr"

  return <div className="d-flex flex-wrap mb-3">
    {ads.map((a,i)=>  <div key={i} className=" d-flex justify-content-center">
      <a id="ctl00_main_adv1" title={a.Text}
       href={path+a.Link} target="_blank"><img title={a.Text} src={path+"/"+a.Image} alt="" /></a>
    </div>
      
    )}
  
    {/* <div className="w-100 d-flex justify-content-center">
      <div className="m-3 ">
        <a id="ctl00_main_adv_js0" title="Ομολογίες ανθρώπων που γνώρισαν τον ανεστημένο Ιησού Χριστό" className="adv_js0" href="#"><img title="Ομολογίες ανθρώπων που γνώρισαν τον ανεστημένο Ιησού Χριστό" src="https://www.wordofgod.gr/images/omologies_pisteos_gr.png" alt="" /></a>
      </div>
      <div className="m-3">
        <a id="ctl00_main_adv_js2" title="Κυριακάτικα Κηρύγματα 2010" className="adv_js2" href="#"><img title="Κυριακάτικα Κηρύγματα 2010" src="https://www.wordofgod.gr/images/sunday_2010_GR.png" alt="" /></a>
      </div>

      <div className="m-3">
        <a id="ctl00_main_adv_js3" title="η εκπομπή: Τα Δόγματα τα εγκεκιμένα υπό των Αποστόλων" className="adv_js3" href="#"><img title="η εκπομπή: Τα Δόγματα τα εγκεκιμένα υπό των Αποστόλων" src="https://www.wordofgod.gr/images/doctrines_gr.png" alt="" /></a>
      </div> 
    </div>*/}

  </div>
}