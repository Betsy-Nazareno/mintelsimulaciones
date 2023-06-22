import React, { useEffect } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const PreviewFile = ({ filePreview }: Props) => {
  const [doc, setDoc] = React.useState<string>("");

  useEffect(() => {
    if (filePreview) {
      setDoc(filePreview);
    } else {
      setDoc("");
    }
  }, [filePreview]);

  return doc ? (
    <DocViewer
      documents={[{ uri: require("./datasets/resources/" + doc) }]}
      pluginRenderers={DocViewerRenderers}
    />
  ) : null;
};

interface Props {
  filePreview: string;
}

export default PreviewFile;
