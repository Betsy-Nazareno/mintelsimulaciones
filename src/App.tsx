import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpreadSheetSimulation from "./modules/SpreadSheets";
import Home from "./modules/Home";
import "./input.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<SpreadSheetSimulation />}
          key={"spreadSheetSimulation"}
          path={"/spreadSheets/:id"}
        />
        <Route element={<Home />} key={"index"} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
