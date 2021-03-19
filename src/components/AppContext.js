import React, { useReducer,useContext } from 'react'
const AppContext = React.createContext({})

// this.state =

//     {
//       isMobileDevice:false,
//       data:{
//       allSeriesOpen: false,
//       setSelectedVideo:'',
//       backTolive:false
//     },actions: {
//     tonggleAllSeries: this.tonggleAllSeries,

//   }}


/**
 * on page load
 * get recent series
 * get resourses
 *
 * store recent series ,resourses
 *
 */

const globalState = {
    resourses: 'testing',
    "recent-series": ''
}


export const Provider = ({ children }) => {
    return (
        <AppContext.Provider value={{ ...globalState }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalState =()=>useContext(AppContext)
export default AppContext