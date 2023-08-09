import React from "react";
import { Router } from "./router";
import AuthContext from "./contexts/AuthContext";
import { useThemeContext } from "./contexts/ThemeContext";

function App() {
  const { themeMode } = useThemeContext();
  return (
    <div className={themeMode}>
      <AuthContext>
        <Router />
      </AuthContext>
    </div>
  );
}
export default App;
