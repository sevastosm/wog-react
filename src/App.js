import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import SeriesList from "./components/playlist/SeriesList";
import AppContext from "./components/AppContext";
import AllSeriesPage from "./pages/allSeriesPage/AllSeriesPage";

import { applicationLang } from "./utils";

import routes from "./routes";
import { useMedia } from "react-media";
import Languages from "./components/Languages";
import useResources from "./hooks/UseResources";

const Routes = () => {
  return (
    <>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </>
  );
};

export default function App() {
  const resourses = useResources(["tabRecordingsSeriesHdr"]);
  const { lang } = useContext(AppContext);

  const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
  return (
    <Layout>
      {isSmallScreen && (
        <Sidebar>
          {/* <Banners /> */}
          <h3>{lang !== "gr" ? "Lanuages" : "Γλώσσες"}</h3>

          <Languages />

          <h3>{resourses.length > 0 && resourses[0].Text}</h3>
          <SeriesList />
        </Sidebar>
      )}
      <Switch>
        <Route exact path={`/:lang/:seriesId/:videoId`}>
          <AllSeriesPage />
        </Route>
        <Routes />
      </Switch>
    </Layout>
  );
}
