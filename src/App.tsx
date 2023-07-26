import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import "./input.css";
import Spreadsheets from "./modules/Spreadsheets";
import { FileManagerSimulation } from "./modules/FileManager";
import { EditorImage } from "./modules/ImageEditor";
import RichTextEditor from "./modules/DocxEditor";
import PDFReader from "./modules/PDFReader";
import CanvaSimulation from "./modules/CanvasEditor";

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
        <Route element={<RichTextEditor />} key={"docx"} path={"/docx/:id"} />
        <Route element={<PDFReader />} key={"reader"} path={"/reader/:id"} />
        <Route
          element={<CanvaSimulation />}
          key={"canva"}
          path={"/canva/:id"}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
