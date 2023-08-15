import React from "react";
import { useParams } from "react-router";
import { PDFfiles } from "./datasets";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const PDFReader = () => {
  const { id } = useParams() as { id: string };
  const [file, setFile] = React.useState("");

  React.useEffect(() => {
    setFile(PDFfiles[id]);
  }, [id]);

  return file ? (
    <DocViewer
      documents={[{ uri: require("./datasets/resources/" + file) }]}
      pluginRenderers={DocViewerRenderers}
    />
  ) : null;
};

export default PDFReader;
