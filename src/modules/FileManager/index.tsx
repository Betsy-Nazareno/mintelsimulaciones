import React, { useState } from "react";
import PreviewFile from "./PreviewFile";
import { FileManagerView } from "./FileManagerView";
import Toolbar from "./assessts/Toolbar.png";
import Modal from "../../common/modal";

export const FileManagerSimulation = () => {
  const [filePreview, setFilePreview] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreview = (e: any) => {
    console.log(e);
    const [filepath] = e.currentSelectedItemKeys;
    const parts = (filepath as string)?.split("/");
    const key = parts?.[parts.length - 1];
    if (key && key.includes(".")) {
      setIsModalOpen(true);
      console.log(key);
      setFilePreview(key);
    }
  };

  return (
    <div
      className="relative"
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",
      }}
    >
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <PreviewFile filePreview={filePreview} />
      </Modal>
      <div className="flex justify-center items-center px-28 pt-12">
        <div className="bg-white" style={{ width: "100%" }}>
          <FileManagerView onFileSelectedChange={handlePreview} />
        </div>
      </div>
      <div className="absolute bottom-0" style={{ width: "100%" }}>
        <img src={Toolbar} alt="toolbar" />
      </div>
    </div>
  );
};
