import React from "react";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AllSeries from "./components/AllSeries";
import { AppContext } from "./components/AppContext";
import "./styles/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.tonggleAllSeries = () => {
      this.setState({
        allSeriesOpen: !this.state.allSeriesOpen
      });
    };
    this.setSelectedVideo = (videoId) => {
      this.setState({
        selectedVideo: videoId
      });
    };

    

    this.actions={
      tonggleAllSeries: this.tonggleAllSeries,
      setSelectedVideo:this.setSelectedVideo
    }

    this.state = 

    {
      isMobileDevice:false,
      data:{
      allSeriesOpen: false,
      setSelectedVideo:'',
      backTolive:false
    },actions: {
    tonggleAllSeries: this.tonggleAllSeries,

  }}

  }

  detectmob =()=>{ 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

   componentDidMount() {
     let isMobileDevice = this.detectmob()


     if(isMobileDevice){
       document.getElementById("root").classList.add('mobile')
       this.setState({
         isMobileDevice:true
       })
     }

   }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App d-flex flex-column justify-content-center ">
          <main className id="page">
            <TopMenu />
            {this.state.allSeriesOpen ? <AllSeries /> : <Main />}
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}
export default App;
