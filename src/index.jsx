import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
  
}
html {
    background: #fefefe;
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: 15px;
    font-weight: 400;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
