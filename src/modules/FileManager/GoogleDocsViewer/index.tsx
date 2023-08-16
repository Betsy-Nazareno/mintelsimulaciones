import React from "react";

const GoogleDocViewer = ({ uri }: Props) => {
  return (
    <div className="md:w-[600px] lg:w-[1090px]">
      <img src="/simulaciones/images/toolbar_pptx.png" alt="Toolbar" />
      <iframe
        src={uri}
        title="Google Doc Viewer"
        className="h-full md:h-[450px] lg:h-[450px] md:w-[600px] lg:w-full"
      ></iframe>
    </div>
  );
};

interface Props {
  uri: string;
}

export default GoogleDocViewer;
