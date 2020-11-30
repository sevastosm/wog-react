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






// constructor(props) {
//   super(props)

//   this.tonggleAllSeries = () => {
//       this.setState({
//           allSeriesOpen: !this.state.allSeriesOpen
//       })
//   }
//   this.setSelectedVideo = videoId => {
//       this.setState({
//           selectedVideo: videoId
//       })
//   }

//   this.actions = {
//       tonggleAllSeries: this.tonggleAllSeries,
//       setSelectedVideo: this.setSelectedVideo
//   }

//   this.state = {
//       isMobileDevice: false,
//       data: {
//           allSeriesOpen: false,
//           setSelectedVideo: '',
//           backTolive: false
//       },
//       actions: {
//           tonggleAllSeries: this.tonggleAllSeries
//       }
//   }
// }

// detectmob = () => {
//   if (
//       navigator.userAgent.match(/Android/i) ||
//       navigator.userAgent.match(/webOS/i) ||
//       navigator.userAgent.match(/iPhone/i) ||
//       navigator.userAgent.match(/iPad/i) ||
//       navigator.userAgent.match(/iPod/i) ||
//       navigator.userAgent.match(/BlackBerry/i) ||
//       navigator.userAgent.match(/Windows Phone/i)
//   ) {
//       return true
//   } else {
//       return false
//   }
// }

// componentDidMount() {
//   let isMobileDevice = this.detectmob()

//   if (isMobileDevice) {
//       document.getElementById('root').classList.add('mobile')
//       this.setState({
//           isMobileDevice: true
//       })
//   }
// }