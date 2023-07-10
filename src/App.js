import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Layout/SignIn";
import SignUp from "./Layout/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
