import React, { useState } from "react";
import {
  Stage,
  Layer,
  Rect,
  RegularPolygon,
  Image,
  Circle,
  Ellipse,
  Text,
} from "react-konva";
import CanvasMenu from "./Menu/CanvasMenu";
import CustomPencil from "./FreeHandDraw/CustomPencil";
import { LOREM_IPSUN } from "./constants";
import CustomImage from "./Images";
import CustomRect from "./BasicShapes/Rect";

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
  { type: "polygon", x: 190, y: 50, sides: 6, radius: 50, fill: "blue" },
  { type: "image", x: 500, y: 500 },
  { type: "text", x: 50, y: 50, fill: "blue" },
];

const CanvasEditor = () => {
  const [shapes, setShapes] = useState<any>(initialAssets);
  const [selectedShape, setSelectedShape] = useState("select");
  const [selectedColor, setSelectedColor] = useState("black");
  const [idSelected, setIdSelected] = useState<number>();
  const [lines, setLines] = React.useState<any>([]);
  const isDrawing = React.useRef(false);

  const handleShapeSelect = (shapeType: any) => {
    setSelectedShape(shapeType);
  };

  const handleColorChange = (color: any) => {
    setSelectedColor(color);
  };

  const handleMouseDown = (e: any) => {
    if (selectedShape !== "pencil") return;
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool: "pencil", points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current || selectedShape !== "pencil") {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
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
    <div className="grid grid-cols-12">
      <div className="col-span-1">
        <CanvasMenu
          onShapeSelect={handleShapeSelect}
          onColorChange={handleColorChange}
        />
      </div>
      <div className="col-span-11">
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onClick={handleCanvasClick}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
        >
          <Layer>
            {shapes.map((shape: any, index: number) => {
              if (shape.type === "rect") {
                return (
                  <CustomRect
                    key={index}
                    id={index}
                    shape={shape}
                    idSelected={idSelected as number}
                    setIdSelected={setIdSelected}
                    color={selectedColor}
                  />
                );
              } else if (shape.type === "polygon") {
                return <RegularPolygon key={index} draggable {...shape} />;
              } else if (shape.type === "circle") {
                return <Circle key={index} draggable {...shape} />;
              } else if (shape.type === "ellipse") {
                return <Ellipse key={index} draggable {...shape} />;
              } else if (shape.type === "pencil") {
                return (
                  <CustomPencil
                    key={index}
                    lines={lines}
                    color={selectedColor}
                  />
                );
              } else if (shape.type === "text") {
                return (
                  <Text key={index} {...shape} draggable text={LOREM_IPSUN} />
                );
              } else if (shape.type === "image") {
                return <CustomImage />;
              }
              return null;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default CanvasEditor;
