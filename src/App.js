import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Banners from "./components/banners/Banners";

import routes from "./routes";
import { applicationLang } from "./utils";
import { useMedia } from "react-media";
import Languages from "./components/Languages";

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
  const isSmallScreen = useMedia({ query: "(max-width: 799px)" });
  return (
    <Layout>
      {isSmallScreen && (
        <Sidebar>
          <Banners />
          <Languages />
        </Sidebar>
      )}
      <Switch>
        <Redirect exact from="/" to={applicationLang()} />
        <Routes />
      </Switch>
    </Layout>
  );
}
