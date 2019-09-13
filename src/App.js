import React from "react";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AllSeries from "./components/AllSeries";
import { AppContext } from "./components/AppContext";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.tonggleAllSeries = () => {
      this.setState({
        allSeriesOpen: !this.state.allSeriesOpen
      });
    };

    this.state = {
      allSeriesOpen: false,
      tonggleAllSeries: this.tonggleAllSeries
    };
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
