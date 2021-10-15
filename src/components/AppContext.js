import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { getIntialData, applicationLang } from "../utils";
const AppContext = React.createContext({});

const live = {
  YouTubeId: "Jp6ueJnMdFw",
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
  lang: window.localStorage.getItem("lang") || "el",
  series: null,
  sidebar: false,
  filterSidebar: false,
};

export const Provider = ({ children }) => {
  const useParamsL = useLocation();

  const [state, setGlobalstate] = React.useState(store);

  const setVideo = (video) => {
    setGlobalstate({ ...state, activeVideo: video });
  };
  const setActivePlaylist = (data) => {
    setGlobalstate({ ...state, activePlaylist: data });
  };

  const setLang = (data) => {
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
          activePlaylist: data[0].Data,
          program: data[1],
          resourses: data[2].Data,
          series: data[3].Data,
        });
      }),
    [lang, state]
  );

  React.useEffect(() => {
    getData(lang);
  }, [lang]);

  console.log("STORE___", state);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(AppContext);
export default AppContext;
