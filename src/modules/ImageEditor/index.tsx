import React from "react";
import { ImagesPath } from "./data";
import { useParams } from "react-router-dom";
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";

export const EditorImage = () => {
  const [sourceImage, setSourceImage] = React.useState("");
  const { id } = useParams();

  React.useEffect(() => {
    setSourceImage(ImagesPath[id as string]);
  }, [id]);

  return (
    <div style={{ height: "100vh" }}>
      <FilerobotImageEditor
        source={`/icons/${sourceImage}`}
        savingPixelRatio={1000}
        previewPixelRatio={1000}
        annotationsCommon={{
          fill: "#ff0000",
        }}
        Text={{ text: "" }}
        Rotate={{ angle: 90, componentType: "slider" }}
        language="es"
        tabsIds={[
          TABS.ADJUST,
          TABS.ANNOTATE,
          TABS.WATERMARK,
          TABS.FILTERS,
          TABS.FINETUNE,
          TABS.RESIZE,
        ]}
        defaultTabId={TABS.ANNOTATE}
        defaultToolId={TOOLS.TEXT}
      />
    </div>
  );
};
