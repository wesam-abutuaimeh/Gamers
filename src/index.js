import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);
