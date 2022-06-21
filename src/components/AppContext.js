import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { getIntialData, applicationLang } from "../utils";
const AppContext = React.createContext({});

const live = {
  YouTubeId: "ENn6RLC0wpo",
  Subject: "LIVE",
  RecordingSubject: "Live streaming from youtube",
};
const lang = applicationLang();

const store = {
  resourses: [],
  recent_series: null,
  activeVideo: live,
  activePlaylist: [],
  program: null,
  lang: window.localStorage.getItem("lang") || "gr",
  series: null,
  sidebar: false,
  filterSidebar: false,
  Data: [],
  loader: false,
  speakersList: [],
  seriesSearchList: [],
};

export const Provider = ({ children }) => {
  const [state, setGlobalstate] = React.useState(store);

  const setVideo = (video) => {
    setGlobalstate({ ...state, activeVideo: video });
  };

  const setLoader = (loader) => {
    setGlobalstate({ ...state, loader: loader });
  };

  const setActivePlaylist = (data) => {
    setGlobalstate({ ...state, activePlaylist: data, loader: false });
  };

  const setLang = async (data) => {
    await window.localStorage.setItem("lang", data);
    setGlobalstate({ ...state, lang: data });
  };
  const setSidebar = (data) => {
    setGlobalstate({ ...state, sidebar: data });
  };
  const setFilterSidebar = (data) => {
    setGlobalstate({ ...state, filterSidebar: data });
  };

  const { lang } = state;

  const getData = useCallback(
    () =>
      getIntialData(lang).then((data) => {
        setGlobalstate({
          ...state,
          activePlaylist: { data: data[0].Data, total: data[0].Total },
          program: data[1],
          resourses: data[2].Data,
          series: data[3].Data,
          seriesSearchList: data[4].Data,
          speakersList: data[5].Data,
        });
      }),
    [lang, state]
  );

  React.useEffect(() => {
    getData(lang);
  }, [lang]);

  console.log("GLOBAL --- STORE ----", state);
  return (
    <AppContext.Provider
      value={{
        ...state,
        setGlobalstate,
        setVideo,
        setActivePlaylist,
        setLang,
        setSidebar,
        setFilterSidebar,
        setLoader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(AppContext);
export default AppContext;
