import React, { Suspense } from "react";
import { Router } from "./router";
import { useThemeContext } from "./contexts/ThemeContext";
import Loader from "./components/Loader";

function App() {
  const { themeMode } = useThemeContext();
  return (
    <div className={`App ${themeMode}`}>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </div>
  );
}
export default App;
