const route= {
  ALL_SERIES: "all-series",
  CONTACT: "contact",
  HELP: "help",
  NEWSLETTER: "newsletter",
  ABOUT: "about",
  HISTORY: "history",
  LINK: "links",
  COOKIES: "cookies",
};

const endPoints = {
  GET_SERRIES_LIST: "/api/series/searchlist/gr",
  GET_ALL_SERRIES: "/api/series/gr",
  GET_RECENT: "/api/contents/sermons_recent/gr",
  GET_PROGRAM:"/api/contents/program/gr/2",
  GET_RESOURCES:"/api/contents/resources/pl",
  GET_ALL_SPEAKERS:"/api/contents/speakers/gr",
  GET_NOW_PLAYNG:"/api/contents/sermons/gr/2"
};

export {endPoints,route}