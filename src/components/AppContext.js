import React from "react";
import {getIntialData,applicationLang} from "../utils"
const AppContext = React.createContext({});

const globalState = {
  resourses: null,
  recent_series: null,
  activeVideo:'_40O8BbkhGE'
};

export const Provider = ({ children }) => {
 const [state, setGlobalstate] = React.useState(globalState);


 const setVideo = video =>{
  setGlobalstate(prevState=>({...prevState,activeVideo:video}));
 }
  console.log("globalState", state);

  const getData = () =>
    getIntialData().then((data) => {
      console.log("DATA", data);
      setGlobalstate(prevState=>({...prevState,resourses:data}));
    });

  const lang = applicationLang()
  React.useEffect(() => {
    getData();
  }, [lang]);
  return (
    <AppContext.Provider value={{ state, setGlobalstate,setVideo }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(AppContext);
export default AppContext;
