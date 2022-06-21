import React, { useContext } from "react";
import AppContext from "../components/AppContext";
import Program from "./Program";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Button,
} from "reactstrap";
import classnames from "classnames";
import NowYouSee from "./NowYouSee";
import useResources from "../hooks/UseResources";

export default function (props) {
  const resourses = useResources([
    "tabCurrentStreamHdr",
    "tabProgramHdr",
    "ImageReturnToLive",
  ]);
  const { lang, setVideo, activeVideo } = useContext(AppContext);
  const [activeTab, setActiveTab] = React.useState("1");

  if (resourses.length < 1) {
    return null;
  }

  console.log("LANIO", lang);
  const handleTabclick = (tab) => {
    setActiveTab(tab);
  };

  const handleClick = () => {
    setVideo({ YouTubeId: "ENn6RLC0wpo" });
  };

  console.log(resourses);

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
        {lang === "gr" && (
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
        )}
        {lang === "gr" && activeVideo.YouTubeId !== "ENn6RLC0wpo" && (
          <div className="position-absolute bottom-0 mb-2">
            {" "}
            <Button onClick={handleClick}> {resourses[2].Text}</Button>
          </div>
        )}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <NowYouSee />
            </Col>
          </Row>
        </TabPane>
        {lang === "gr" && (
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Program />
              </Col>
            </Row>
          </TabPane>
        )}
      </TabContent>
    </div>
  );
}
