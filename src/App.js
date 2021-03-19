import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import { HomePage } from "./pages";
import routes from "./routes";

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
        <Routes />
      </Switch>
    </Layout>
  );
}
