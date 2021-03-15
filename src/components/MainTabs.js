import React from "react";
import Program from "./Program"
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

export default function (props) {

  const [activeTab,setActiveTab]= React.useState("2")

  const handleTabclick = (tab)=>{
   setActiveTab(tab)
  }
    return (
      <div className="mt-2">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                handleTabclick("1");
              }}
            >
              Τώρα βλέπετε
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                handleTabclick("2");
              }}
            >
              Πρόγραμμα
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h1 className="title">Tab 1 Contents</h1>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <Program/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );

}
