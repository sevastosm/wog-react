const host = "https://wordofgod.gr";
const getData = async (url, lang) => {
  const endPoints = {
    GET_SERIES_SEARCH_LIST: `/api/series/searchlist/${lang}`,
    GET_ALL_SERIES: `/api/series/${lang}`,
    GET_RECENT: `/api/contents/sermons_recent/${lang}`,
    GET_PROGRAM: `/api/contents/program/${lang}/2`,
    GET_RESOURCES: `/api/contents/resources/${lang}`,
    GET_ALL_SPEAKERS: `/api/contents/speakers/${lang}`,
    GET_NOW_PLAYNG: `/api/contents/sermons/${lang}/2`,
  };

  const response = await fetch(`${host}${endPoints[url]}`);
  const data = await response.json();
  return data;
};
export default getData;
