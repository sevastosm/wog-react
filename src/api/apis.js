const host = "https://wordofgod.gr";

const d = new Date();
const getData = async (url, lang) => {
  const endPoints = {
    GET_SERIES_SEARCH_LIST: `/media/api/series/searchlist/${lang}`,
    GET_ALL_SERIES: `/media/api/series/${lang}`,
    GET_RECENT: `/media/api/recordings/recent/${lang}`,
    GET_PROGRAM: `/media/api/contents/program/${lang}/${d.getTimezoneOffset()}`,
    GET_RESOURCES: `/media/api/contents/resources/${lang}`,
    GET_ALL_SPEAKERS: `/media/api/contents/speakers/${lang}`,
    GET_NOW_PLAYNG: `/media/api/contents/sermons/${lang}/${d.getTimezoneOffset()}`,
    GET_LIVE: `/media/api/live/${lang}`,
    GET_POPULAR: `/media/api/recordings/popular/${lang}`,
    GET_SUGGESTED: `/media/api/recordings/suggested/${lang}`,
    GET_ADS: `/media/api/contents/ads/${lang}`,
  };
  try {
    const response = await fetch(`${host}${endPoints[url]}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error");
  }
};
export default getData;

export const getLive = async () => {
  try {
    const response = await fetch(`${host}/media/api/live/gr`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error");
  }
};

export const applySearch = async (body) =>
  await fetch(`https://www.wordofgod.gr/media/api/recordings/search`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

export const applyContact = async (body) =>
  await fetch(`https://www.wordofgod.gr/media/api/contact/sendmessage`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
