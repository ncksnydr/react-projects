import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./scripts/Weather";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <Weather defaultZip="90210" />
);
