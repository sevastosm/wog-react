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
  resourses: null,
  recent_series: null,
  activeVideo: live,
  activePlaylist: [],
  program: null,
  lang: lang,
};

export const Provider = ({ children }) => {
  const useParamsL = useLocation();
  console.log("useParamsL", useParamsL);

  const [state, setGlobalstate] = React.useState(store);

  const setVideo = (video) => {
    setGlobalstate({ ...state, activeVideo: video });
  };
  const setActivePlaylist = (data) => {
    setGlobalstate({ ...state, activePlaylist: data });
  };

  const getData = useCallback(
    () =>
      getIntialData().then((data) => {
        setGlobalstate({
          ...state,
          activePlaylist: data[0].Data,
          program: data[1],
          resourses: data[2].Data,
        });
      }),
    []
  );

  const lang = applicationLang();
  React.useEffect(() => {
    getData(lang);
    setGlobalstate({ ...state, lang: lang });
  }, [lang]);

  console.log("STORE___", state);
  return (
    <AppContext.Provider
      value={{ ...state, setGlobalstate, setVideo, setActivePlaylist }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(AppContext);
export default AppContext;
