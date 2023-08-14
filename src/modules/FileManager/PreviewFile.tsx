import React, { useEffect } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import GoogleDocViewer from "./GoogleDocsViewer";

const PreviewFile = ({ externalUri, filePreview }: Props) => {
  const [doc, setDoc] = React.useState<string>("");

  useEffect(() => {
    if (filePreview) {
      setDoc(filePreview);
    } else {
      setDoc("");
    }
  }, [filePreview]);

  if (!doc) return <></>;

  if (doc?.endsWith(".ppt") || doc?.endsWith(".pptx")) {
    return <GoogleDocViewer uri={externalUri} />;
  }

  return (
    <DocViewer
      documents={[{ uri: require("./datasets/resources/" + doc) }]}
      pluginRenderers={DocViewerRenderers}
    />
  );
};

interface Props {
  externalUri: string;
  filePreview: string;
}

export default PreviewFile;
