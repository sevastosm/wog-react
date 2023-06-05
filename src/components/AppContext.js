import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { getIntialData, applicationLang } from "../utils";
const AppContext = React.createContext({});

const live = {
  YouTubeId: "ENn6RLC0wpo",
  Subject: "YouTube chanel",
  RecordingSubject: "",
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
  activePage: 1,
};

export const Provider = ({ children }) => {
  const [state, setGlobalstate] = React.useState(store);

  const setVideo = (video) => {
    setGlobalstate({ ...state, activeVideo: video });
  };

  const setLoader = (loader) => {
    setGlobalstate({ ...state, loader: loader });
  };
  const setActivepage = (page) => {
    setGlobalstate({ ...state, activePage: page });
  };
  const setActivePlaylist = (data) => {
    setGlobalstate({
      ...state,
      activePlaylist: { data: data.Data, total: data.Total, kind: data.type },
      loader: false,
      sidebar: false,
      activePage: parseInt(data.activePage),
    });
  };

  const setLang = async (data) => {
    await window.localStorage.setItem("lang", data);
    setGlobalstate({ ...state, lang: data, sidebar: false });
  };
  const setSidebar = (data) => {
    setGlobalstate({ ...state, sidebar: data });
  };
  const setFilterSidebar = (data) => {
    setGlobalstate({ ...state, filterSidebar: data });
  };

  const { lang } = state;

  function extractVideoID(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
      return match[7];
    } else {
      alert('Could not extract video ID.');
    }
  }

  const getData = useCallback(
    () =>
      getIntialData(lang).then((data) => {
        setGlobalstate({
          ...state,
          recent: { data: data[0].Data, total: data[0].Total },
          program: data[1],
          resourses: data[2].Data,
          series: data[3].Data,
          seriesSearchList: data[4].Data,
          speakersList: data[5].Data,
          popular: { data: data[6].Data, total: data[6].Total },
          sugested: { data: data[7].Data, total: data[7].Total },
          live:data[8].Data,
          ads:data[9]?.Data,
          activeVideo: {
            YouTubeId: extractVideoID(data[8].Data.HIGH.URL),
            Subject: '',
            RecordingSubject: ''
        }
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
        setActivepage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(AppContext);
export default AppContext;
