import React from "react";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import Main from "./components/Main";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allSeriesOpen: false };
  }

  tonggleAllSeries = () => {
    this.setState({
      allSeriesOpen: !this.state.allSeriesOpen
    });
  };

  render() {
    return (
      <div className="App d-flex flex-column justify-content-center ">
        <TopMenu />
        <Main />

        <Footer />
      </div>
    );
  }
}
export default App;
