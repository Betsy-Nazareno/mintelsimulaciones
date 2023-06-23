import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreviewFile from "./PreviewFile";
import { FileManagerView } from "./FileManagerView";
import Toolbar from "./assessts/Toolbar.png";
import Modal from "../../common/modal";
import fileSystemSets from "./datasets/data/index";

export const FileManagerSimulation = () => {
  const { id } = useParams();
  const [filePreview, setFilePreview] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileSystem, setFileSystem] = useState([]);

  useEffect(() => {
    setFileSystem(fileSystemSets[id as string]);
  }, [id]);

  const handlePreview = (e: any) => {
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
          <FileManagerView
            fileSystem={fileSystem}
            onFileSelectedChange={handlePreview}
          />
        </div>
      </div>
      <div className="absolute bottom-0" style={{ width: "100%" }}>
        <img src={Toolbar} alt="toolbar" />
      </div>
    </div>
  );
};
