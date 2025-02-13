import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import CyclOPediaClassPage from "./CyclOPediaCalssPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center">Class Component</span>
        <CyclOPediaClassPage />
      </div>
    </div>
  </div>
);
