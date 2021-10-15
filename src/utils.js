import getUserLocales from "get-user-locale";
import getData from "./api/apis";

const localeCashed = () => window.localStorage.getItem("lang");
const validLanuages = ["el", "en", "it", "ru", "ro", "pl", "fr", "sq"];

const getBroswerLang = () => {
  const locale = getUserLocales().slice(0, 2);
  const isValidLanguage = validLanuages.includes(locale);
  return isValidLanguage ? locale : "en";
};

export const applicationLang = () => {
  const lang = localeCashed();
  // window.localStorage.setItem("lang", lang);
  return lang;
};

// export const getIntialData = async () => {
//   const lang = applicationLang();
//   return await getData("GET_RESOURCES", lang).then((values) => {
//     console.log("GET_RESOURCES", values);
//     return values;
//   });
// };
export const getIntialData = async (lang = "el") => {
  return await Promise.all([
    getData("GET_RECENT", lang),
    getData("GET_PROGRAM", lang),
    getData("GET_RESOURCES", lang),
    getData("GET_ALL_SERRIES", lang),
  ]).then((values) => {
    window.localStorage.setItem("lang", lang);
    console.log("GET_RECENT", values[0].Data);
    console.log("GET_PROGRAM", values[1].Data);
    return values;
  });
};

export const getPlaylist = async (id, lang) => {
  try {
    const response = await fetch(
      "https://www.wordofgod.gr/api/contents/search",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          Lang: lang,
          DateFrom: "",
          DateTo: "",
          SpeakersList: [],
          SeriesList: [id],
          AllSeries: false,
          Text: "",
        }),
      }
    );

    const data = await response.json();
    return data.Data;
  } catch (error) {
    console.log(error);
  }
};
