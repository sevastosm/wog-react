// import getUserLocales from "get-user-locale";
import getData from "./api/apis";
import moment from "moment";

// const localeCashed = () => window.localStorage.getItem("lang");
// const validLanuages = ["el", "en", "it", "ru", "ro", "pl", "fr", "sq"];

// const getBroswerLang = () => {
//   const locale = getUserLocales().slice(0, 2);
//   const isValidLanguage = validLanuages.includes(locale);
//   return isValidLanguage ? locale : "en";
// };

export const applicationLang = () => {
  let lang = window.localStorage.getItem("lang");
  if (lang) {
    return lang;
  }
  return "el";
};

export const getIntialData = (lang = "el") => {
  return Promise.all([
    getData("GET_RECENT", lang),
    getData("GET_PROGRAM", lang),
    getData("GET_RESOURCES", lang),
    getData("GET_ALL_SERIES", lang),
    getData("GET_SERIES_SEARCH_LIST", lang),
    getData("GET_ALL_SPEAKERS", lang),
     getData("GET_POPULAR", lang),
     getData("GET_SUGGESTED", lang), getData("GET_LIVE", lang),
      getData("GET_ADS", lang)
  ]).then((values) => {
    return values;
  });
};

//https://www.wordofgod.gr/api/recordings/gr/type/13/50/0

export const getPlaylist = async (kind, id, lang, page = 1, items = 20) => {
  const type = kind === "type" ? "type" : "series";

  try {
    const response = await fetch(
      `https://www.wordofgod.gr/api/recordings/${lang}/${type}/${id}/${items}/${page}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );

    const data = await response.json();
    return { data: data.Data, total: data.Total };
  } catch (error) {
    console.log(error);
  }
};

const format = "DD-MM-YY";

export const convertDate = (date) => moment(date).format(format);
