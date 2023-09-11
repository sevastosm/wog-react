/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useMedia } from "react-media";
import { getPlaylist } from "../../utils";
import answers from "../../Assets/gr/answers_gr.png";
import family from "../../Assets/gr/family.png";
import esxates_gr from "../../Assets/gr/esxates_gr.png";
import omologies_pisteos_gr from "../../Assets/gr/omologies_pisteos_gr.png";
import answers_pl from "../../Assets/pl/answers_pl.png";
import omologies_pisteos_pl from "../../Assets/pl/omologies_pisteos_pl.png";
import esxates_pl from "../../Assets/pl/esxates_pl.png";

import AppContext from "../AppContext";
import "./Banners.scss";

export default function Banners() {
  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
  const { ads, setActivePlaylist, setLoader, lang } =
    React.useContext(AppContext);

  if (isSmallScreen) return null;

  const path = "https://www.wordofgod.gr";

  const handleClick = async (image) => {
    if (image.includes("answers")) {
      setLoader(true);
      const result = await getPlaylist("type", 13, lang);
      return setActivePlaylist({
        Data: result.data,
        Total: result.total,
        type: "type",
        activePage: 1,
      });
    }
    // if (image.includes("doctrines_gr")) {
    //   setLoader(true);
    //   const result = await getPlaylist('series', 108, lang,);
    //   return setActivePlaylist({ Data: result.data, Total: result.total, type: 'type', activePage: 1 });

    // }
    if (image.includes("omologies_pisteos")) {
      setLoader(true);
      const result = await getPlaylist("series", 67, lang);
      return setActivePlaylist({
        Data: result.data,
        Total: result.total,
        type: "type",
        activePage: 1,
      });
    }

    if (image.includes("family")) {
      setLoader(true);
      const result = await getPlaylist("series", 110, lang);
      return setActivePlaylist({
        Data: result.data,
        Total: result.total,
        type: "type",
        activePage: 1,
      });
    }
  };

  const getImage = (image, lang) => {
    if (lang === "pl") {
      if (image.includes("esxates")) {
        return esxates_pl;
      }
      if (image.includes("omologies_pisteos")) {
        return omologies_pisteos_pl;
      }
      if (image.includes("answers")) {
        return answers_pl;
      }
    } else {
      if (image.includes("esxates")) {
        return esxates_gr;
      }
      if (image.includes("omologies_pisteos")) {
        return omologies_pisteos_gr;
      }
      if (image.includes("family")) {
        return family;
      }
      if (image.includes("answers")) {
        return answers;
      }
    }
  };

  return (
    <div className="d-flex flex-wrap mb-3 banners">
      {ads.map((a, i) => {
        if (a?.Image.includes("sunday") || a?.Image.includes("doctrines_gr")) {
          return null;
        }
        if (a?.Image.includes("esxates")) {
          return (
            <div
              key={i}
              target="blank"
              className=" d-flex justify-content-center"
            >
              <a
                id="ctl00_main_adv1"
                title={a.Text}
                target="blank"
                href={path + a.Link}
              >
                <img title={a.Text} src={getImage(a?.Image, lang)} alt="" />
              </a>
            </div>
          );
        }
        return (
          <div
            key={i}
            className=" d-flex justify-content-center"
            onClick={(e) => {
              e.preventDefault();
              handleClick(a.Image);
            }}
          >
            <div id="ctl00_main_adv1" title={a.Text} href={path + a.Link}>
              <img title={a.Text} src={getImage(a?.Image, lang)} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
