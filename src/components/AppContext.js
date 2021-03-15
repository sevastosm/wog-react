import React, { useReducer } from 'react'
export const AppContext = React.createContext({})

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

const initialAppState = {
    text: 'testing',
    nowPlaying: ''
}

function reducer(state, action) {
    switch (action.type) {
        case '1':
            return { text: state.text + ' success' }
        case '2':
            return { text: state.text + ' failed' }
        default:
            return state
    }
}

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialAppState)

    return (
        <AppContext.Provider value={{ ...state, dispatch: dispatch }}>
            {children}
        </AppContext.Provider>
    )
}