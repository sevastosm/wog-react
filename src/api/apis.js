const host = "https://wordofgod.gr";
const getData = async (url, lang) => {
  const endPoints = {
    GET_SERIES_SEARCH_LIST: `/api/series/searchlist/${lang}`,
    GET_ALL_SERIES: `/api/series/${lang}`,
    GET_RECENT: `/api/recordings/recent/${lang}`,
    GET_PROGRAM: `/api/contents/program/${lang}/2`,
    GET_RESOURCES: `/api/contents/resources/${lang}`,
    GET_ALL_SPEAKERS: `/api/contents/speakers/${lang}`,
    GET_NOW_PLAYNG: `/api/contents/sermons/${lang}/2`,
    GET_LIVE: `/api/live/${lang}`,
    GET_POPULAR: `/api/recordings/popular/${lang}`,
    GET_SUGGESTED: `/api/recordings/suggested/${lang}`,
    GET_ADS: `/api/contents/ads/gr`,
  };

  const response = await fetch(`${host}${endPoints[url]}`);
  const data = await response.json();
  return data;
};
export default getData;
