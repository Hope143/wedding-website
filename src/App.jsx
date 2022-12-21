import React from "react";
import FrontPage from "./components/FrontPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

  <Routes>
    <Route index element={<FrontPage/>}/>
  </Routes>
 
  );
}

export default App;
