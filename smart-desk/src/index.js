import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import { BrowserRouter } from 'react-router-dom'; 
import App from './App'; 

ReactDOM.render(
  <BrowserRouter>
    <div className="intro">
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);