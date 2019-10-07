import React, { Component } from 'react';
import Playlist from "./Playlist";
import { GetSeries } from "../mocks/mocks";
import { AppContext } from "./AppContext";
import {UncontrolledCollapse} from 'reactstrap';
import { ReactComponent as Arrow} from "../Assets/Header/Arrow.svg"
import VideoPlayer from "./VideoPlayer"

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

    // If serries has childern

    multiSerries =(listItem)=>{

    
     return (<div>
        <div key={listItem.ID} id={listItem.Name+listItem.ID}  className="adv d-flex">
                        <a
                          id="ctl00_main_adv1"
                        >
                          {listItem.Name} 
                        </a>
                      </div>
       <UncontrolledCollapse style={{padding: '4px 0px'}}  toggler={'#'+listItem.Name+listItem.ID}>
       {listItem.Series.map(listItem => {
                    return   <div key={listItem.ID} className="adv d-flex">
                    <a
                      id="ctl00_main_adv1"
                    >
                      {listItem.Name} 
                    </a>
       </div>})}
                  </UncontrolledCollapse >
                    </div>)
    
    }
  

    render() {
      return (
    <AppContext.Consumer>
      {(appState) => (
       <div> <div className="d-flex" style={{ borderBottom: "1px solid #0000001a",padding:'15px 25px',alignItems:'center' }}>
           <div className={'btn1 d-flex '} style={{maxWidth:'80px',padding:'20px'}} onClick={appState.actions.tonggleAllSeries}><Arrow/></div>
            <h2 style={{flexGrow:'1'}} >All serries</h2></div>
        <div className="d-flex flex-wrap mt-2" >
          <div className="d-flex right-banners col-lg-3 col-sm-12">
          <div className="d-flex flex-column  w-100">
            {appState.isMobileDevice?<VideoPlayer/>:''}
            {customListist.map(listItem => {
              return (
                // If serries has childern
                listItem.Series? this.multiSerries(listItem):(
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
{appState.isMobileDevice?"":<VideoPlayer/>}

          <Playlist />
       

        </div></div>
        </div>
      )}
    </AppContext.Consumer>
    );
  }
}

export default AllSeries;
