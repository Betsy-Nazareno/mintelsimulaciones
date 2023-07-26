import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const CanvaSimulation = () => {
  return (
    <div>
      <h1>Canvas Editor</h1>
      <ReactSketchCanvas
        width="1024px"
        height="768px"
        //  tool={Tools.Pencil}
        //  lineColor='black'
        //  lineWidth={3}
      />
    </div>
  );
};

export default CanvaSimulation;
