import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import App1 from "./functioncomp/Netflix/App1";
import Todo from "./functioncomp/Todo";
// import Practice from "./functioncomp/Practice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todo />);
// {
//   /* <App1 /> */
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
