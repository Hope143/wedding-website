import React from "react";
import MainHandler from "./components/MainHandler";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

  <Routes>
    <Route index element={<MainHandler/>}/>
  </Routes>
 
  );
}

export default App;
