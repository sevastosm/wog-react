import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import { HomePage } from "./pages";
import routes from "./routes";
import {applicationLang} from "./utils"

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
  return (
    <Layout>
      <Switch>
        <Redirect exact from="/" to={applicationLang()} />
        <Routes />
      </Switch>
    </Layout>
  );
}
