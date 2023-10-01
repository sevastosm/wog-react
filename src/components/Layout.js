import React from "react";
import TopMenu from "./TopMenu";
import Footer from "./footer/Footer";

import "../styles/app.scss";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column justify-content-center layout">
      <main id="page">
        <TopMenu />
        {children}
      </main>
      <Footer />
    </div>
  );
}
