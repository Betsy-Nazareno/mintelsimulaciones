import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import "./input.css";
import Spreadsheets from "./modules/spreadsheets";
import { FileManagerSimulation } from "./modules/filemanager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Spreadsheets />}
          key={"spreadSheetSimulation"}
          path={"/spreadSheets/:id"}
        />
        <Route
          element={<FileManagerSimulation />}
          key={"fileManager"}
          path={"/filemanager/:id"}
        />
        <Route element={<Home />} key={"index"} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
