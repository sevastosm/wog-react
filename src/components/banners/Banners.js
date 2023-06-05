/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useMedia } from "react-media";
import { getPlaylist } from "../../utils";

import AppContext from "../AppContext";
import "./Banners.scss";




export default function Banners() {
  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
  const {
    ads,
    setActivePlaylist,
    setLoader,
    lang
  } = React.useContext(AppContext);

  if (isSmallScreen) return null
  console.log("ADS", ads)
  // if (!ads) return null
  const path = "https://www.wordofgod.gr"

  const handleClick = async (image) => {
    if (image.includes("answers")) {
      setLoader(true);
      const result = await getPlaylist('type', 13, lang,);
      return setActivePlaylist({ Data: result.data, Total: result.total, type: 'type', activePage: 1 });

    }
    if (image.includes("doctrines_gr")) {
      setLoader(true);
      const result = await getPlaylist('series', 108, lang,);
      return setActivePlaylist({ Data: result.data, Total: result.total, type: 'type', activePage: 1 });

    }
    if (image.includes("omologies_pisteos_gr")) {
      setLoader(true);
      const result = await getPlaylist('series', 67, lang,);
      return setActivePlaylist({ Data: result.data, Total: result.total, type: 'type', activePage: 1 });
    }

    if (image.includes("family")) {
      setLoader(true);
      const result = await getPlaylist('series', 110, lang,);
      return setActivePlaylist({ Data: result.data, Total: result.total, type: 'type', activePage: 1 });
    }
  }

  return <div className="d-flex flex-wrap mb-3 banners">
    {ads.map((a, i) => {
      if (a?.Image.includes("sunday")) {
        return null
      }
      if (a?.Image.includes("esxates_gr_new")) {
        return <div key={i} target="blank" className=" d-flex justify-content-center" >
          <a id="ctl00_main_adv1" title={a.Text}
            target="blank" href={path + a.Link} ><img title={a.Text} src={path + "/" + a.Image} alt="" /></a>
        </div>
      }
      return <div key={i} className=" d-flex justify-content-center" onClick={(e) => {
        e.preventDefault();
        handleClick(a.Image)
      }}>
        <div id="ctl00_main_adv1" title={a.Text}
          href={path + a.Link} ><img title={a.Text} src={path + "/" + a.Image} alt="" /></div>
      </div>
    }

    )}
  </div>
}