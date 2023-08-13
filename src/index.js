import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthContext>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </AuthContext>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
