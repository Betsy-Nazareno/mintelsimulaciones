import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import "./input.css";
import Spreadsheets from "./modules/Spreadsheets";
import { FileManagerSimulation } from "./modules/FileManager";
import { EditorImage } from "./modules/ImageEditor";
import SunEditorr from "./modules/DocxEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} key={"index"} path={"/"} />
        <Route
          element={<Spreadsheets />}
          key={"spreadSheetSimulation"}
          path={"/spreadsheets/:id"}
        />
        <Route
          element={<FileManagerSimulation />}
          key={"fileManager"}
          path={"/filemanager/:id"}
        />
        <Route element={<EditorImage />} key={"editor"} path={"/editor/:id"} />
        <Route element={<SunEditorr />} key={"docx"} path={"/docx"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
