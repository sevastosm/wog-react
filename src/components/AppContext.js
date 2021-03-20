import React from "react";
import {getIntialData,applicationLang} from "../utils"
const AppContext = React.createContext({});

const globalState = {
  resourses: null,
  recen_series: null,
};

export const Provider = ({ children }) => {
 const [state, setGlobalstate] = React.useState(globalState);
  console.log("globalState", state);

  const getData = () =>
    getIntialData().then((data) => {
      console.log("DATA", data);
      setGlobalstate(data);
    });

  const lang = applicationLang()
  React.useEffect(() => {
    getData();
  }, [lang]);
  return (
    <AppContext.Provider value={{ state, setGlobalstate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(AppContext);
export default AppContext;
