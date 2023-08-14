import React from "react";
import { ImagesPath } from "./data";
import { useParams } from "react-router-dom";
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";

export const EditorImage = () => {
  const [sourceImage, setSourceImage] = React.useState("");
  const [urlImage, seturlImage] = React.useState("");
  const { id } = useParams();

  React.useEffect(() => {
    setSourceImage(ImagesPath[id as string]);
  }, [id]);

  function urltoFile(url: string, filename: string, mimeType: string) {
    if (url.startsWith("data:")) {
      var arr = url.split(","),
        mime = arr?.[0]?.match(/:(.*?);/)?.[1],
        bstr = atob(arr[arr.length - 1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      var file = new File([u8arr], filename, { type: mime || mimeType });
      return Promise.resolve(file);
    }
    return fetch(url)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], filename, { type: mimeType }));
  }

  const handleSave = async (e: any) => {
    console.log("mmm", e);
    // const fetchlala = await urltoFile(e.imageBase64, e.fullName, e.mimeType);
    console.log(e.imageBase64);
    seturlImage(e.imageBase64);
    window.location.href = e.imageBase64;
  };

  return (
    <div style={{ height: "100vh" }}>
      <a download="cat22.png" href={urlImage}>
        Download
      </a>
      {sourceImage && (
        <FilerobotImageEditor
          source={`/images/${sourceImage}`}
          onSave={handleSave}
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
      )}
    </div>
  );
};
