import React, { Component } from 'react';
import Playlist from "./Playlist";
import { GetSeries } from "../mocks/mocks";
import { AppContext } from "./AppContext";
import { Collapse, Button, CardBody, Card } from 'reactstrap';


let customListist = GetSeries.Data;


  class AllSeries extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }
  
    toggle=()=> {
      this.setState(state => ({ collapse: !state.collapse }));
    }
    render() {
      return (
    <AppContext.Consumer>
      {({ tonggleAllSeries }) => (
        <div> <h2 style={{ borderBottom: "1px solid #0000001a" }}>All serries</h2>
        <div className="d-flex flex-wrap" >
          <div className="d-flex right-banners col-lg-3 col-sm-12">
          <div className="d-flex flex-column  w-100">
            {customListist.map(listItem => {
              return (
                listItem.Series? (<div>
  <div key={listItem.ID} onClick={this.toggle} className="adv d-flex">
                  <a
                    id="ctl00_main_adv1"
                  >
                    {listItem.Name} 
                  </a>
                </div>

 {listItem.Series.map(listItem => {
              return  <Collapse isOpen={this.state.collapse}>  <div key={listItem.ID} className="adv d-flex">
              <a
                id="ctl00_main_adv1"
              >
                {listItem.Name} 
              </a>
            </div> </Collapse>})
 }
              </div>):(
                <div key={listItem.ID} className="adv d-flex">
                  <a
                    id="ctl00_main_adv1"
                  >
                    {listItem.Name} 
                  </a>
                </div>)
              );
            })}
          
          </div>
        </div>

<div className="col-lg-9 col-sm-12">
          <Playlist />
        <button onClick={tonggleAllSeries}>Close</button>

        </div></div>
        </div>
      )}
    </AppContext.Consumer>
    );
  }
}

export default AllSeries;
