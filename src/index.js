import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <DarkModeContextProvider>
    <App callback={() => console.log("renderered")} />
  </DarkModeContextProvider>
);
