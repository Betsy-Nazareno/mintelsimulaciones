import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import RichTextsContent from "./datasets";
import { useParams } from "react-router-dom";

const RichTextEditor = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  const { id } = useParams();

  const isSmallScreen = window.matchMedia("(max-width: 1023.5px)").matches;

  useEffect(() => {
    setContent(RichTextsContent[id as string]);
  }, [id]);

  return (
    <div style={{ height: "100vh" }}>
      <Editor
        tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
        onInit={(evt, editor) => (editorRef.current = editor as any)}
        initialValue={content}
        apiKey="ubaoegai2i60ab94ge8augvzhod6n3wa1ktsj50ixl0wukm9" //Replace for environment variable
        init={{
          height: "100vh",
          menubar: "file edit view insert format tools table help",
          plugins: [
            "advlist",
            "autolink",
            "template",
            "importcss",
            "codesample",
            "pagebreak",
            "nonbreaking",
            "emoticons",
            "save",
            "directionality",
            "lists",
            "link",
            "visualchars",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          editimage_cors_hosts: ["picsum.photos"],
          toolbar_sticky_offset: isSmallScreen ? 102 : 108,
          skin: "oxide-dark",
          toolbar_mode: "sliding",
          contextmenu: "link image table",
        }}
      />
    </div>
  );
};
export default RichTextEditor;
