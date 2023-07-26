import React, { useState } from "react";
import { Stage, Layer, Rect, RegularPolygon } from "react-konva";
import CanvasMenu from "./CanvasMenu";

const initialAssets = [
  // You can define your initial assets here, for example:
  {
    type: "rect",
    x: 50,
    y: 50,
    width: 100,
    height: 50,
    fill: "blue",
    sides: 1,
    radius: 10,
  },
  { type: "polygon", x: 200, y: 100, sides: 6, radius: 50, fill: "green" },
];

const CanvasEditor = () => {
  const [shapes, setShapes] = useState<any>(initialAssets);
  const [selectedShape, setSelectedShape] = useState("rect");
  const [selectedColor, setSelectedColor] = useState("black");

  const handleShapeSelect = (shapeType: any) => {
    setSelectedShape(shapeType);
  };

  const handleColorChange = (color: any) => {
    setSelectedColor(color);
  };

  const handleCanvasClick = (event: any) => {
    // Here you can add new shapes when the canvas is clicked.
    const newShape = {
      type: selectedShape,
      x: event.evt.layerX,
      y: event.evt.layerY,
      width: 80,
      height: 80,
      fill: selectedColor,
    };
    setShapes([...shapes, newShape]);
  };

  return (
    <div>
      <CanvasMenu
        onShapeSelect={handleShapeSelect}
        onColorChange={handleColorChange}
      />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleCanvasClick}
      >
        <Layer>
          {shapes.map((shape: any, index: any) => {
            if (shape.type === "rect") {
              return <Rect key={index} {...shape} />;
            } else if (shape.type === "polygon") {
              return <RegularPolygon key={index} {...shape} />;
            }
            return null;
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasEditor;
