import React, { useContext } from "react";
import AppContext from "../components/AppContext";
import Program from "./Program";
import Banners from "./banners/Banners";
import { useMedia } from "react-media";

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
  const isMobile = useMedia({ query: "(max-width: 480px)" });

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

  const handleTabclick = (tab) => {
    setActiveTab(tab);
  };

  // const handleClick = () => {
  //   setVideo({ YouTubeId: "ENn6RLC0wpo" });
  // };

  return (
    !isMobile && (
      <div className="mt-2 ">
        <Banners />
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
          {/* {lang === "gr" && activeVideo.YouTubeId !== "ENn6RLC0wpo" && (
          <div className="position-absolute bottom-0 mb-2">
            <button className="btn" onClick={handleClick}>
              {resourses[2].Text}
            </button>
          </div>
        )} */}
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
    )
  );
}
