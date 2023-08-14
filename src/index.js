import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { TaskProvider } from "./contexts/taskContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TaskProvider>
        <App />
      </TaskProvider>
    </Router>
  </React.StrictMode>
);
