import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import "./input.css";
import Spreadsheet from "./modules/Spreadsheets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Spreadsheet />}
          key={"spreadSheetSimulation"}
          path={"/spreadSheets/:id"}
        />
        <Route element={<Home />} key={"index"} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
