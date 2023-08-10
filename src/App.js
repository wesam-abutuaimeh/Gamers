import React from "react";
import { Router } from "./router";
import { useThemeContext } from "./contexts/ThemeContext";

function App() {
  const { themeMode } = useThemeContext();
  return (
    <div className={`App ${themeMode}`}>
      <Router />
    </div>
  );
}
export default App;
