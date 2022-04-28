import React from "react";
import Program from "./Program";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import NowYouSee from "./NowYouSee";
import useResources from "../hooks/UseResources";

export default function (props) {
  const resourses = useResources(["tabCurrentStreamHdr", "tabProgramHdr"]);

  const [activeTab, setActiveTab] = React.useState("1");

  if (resourses.length < 1) {
    return null;
  }

  const handleTabclick = (tab) => {
    setActiveTab(tab);
  };
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
            {resourses[0].Text}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              handleTabclick("2");
            }}
          >
            {resourses[1].Text}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <NowYouSee />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Program />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
