import React from "react";
import ReactDOM from "react-dom/client";
import WorkOnGridApp from "./WorkOnGridApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WorkOnGridApp header={"WorkOnGrid Assignment"} />
  </React.StrictMode>
);
