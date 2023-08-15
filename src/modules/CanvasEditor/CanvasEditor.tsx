import React, { useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
import CanvasMenu from "./Menu/CanvasMenu";
import CustomPencil from "./FreeHandDraw/CustomPencil";
import CustomImage from "./BasicShapes/Image";
import CustomRect from "./BasicShapes/Rect";
import CustomStar from "./BasicShapes/Star";
import CustomEllipse from "./BasicShapes/Ellipse";
import CustomArrow from "./BasicShapes/Arrow";
import CustomCircle from "./BasicShapes/Circle";
import CustomPolygon from "./BasicShapes/Polygon";
import CustomText from "./BasicShapes/Text";

const CanvasEditor = ({ initialAssets }: Props) => {
  const [shapes, setShapes] = useState<any>([]);
  const [selectedShape, setSelectedShape] = useState("select");
  const [selectedColor, setSelectedColor] = useState("black");
  const [idSelected, setIdSelected] = useState<number>();
  const [lines, setLines] = React.useState<any>([]);
  const isDrawing = React.useRef(false);

  useEffect(() => {
    setShapes(initialAssets);
  }, [initialAssets]);

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
    const newShape = {
      type: selectedShape,
      x: event.evt.layerX,
      y: event.evt.layerY,
      draggable: true,
      width: 80,
      height: 80,
      sides: 6,
      fill: selectedColor,
    };
    setShapes([...shapes, newShape]);
  };

  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="lg:col-span-1 sticky top-10 lg:h-[100vh] z-40">
        <CanvasMenu
          onShapeSelect={handleShapeSelect}
          onColorChange={handleColorChange}
          selectedColor={selectedColor}
        />
      </div>
      <div className="lg:col-span-11 z-10">
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
                    setSelectedColor={setSelectedColor}
                  />
                );
              } else if (shape.type === "polygon") {
                return (
                  <CustomPolygon
                    key={index}
                    id={index}
                    shape={shape}
                    idSelected={idSelected as number}
                    setIdSelected={setIdSelected}
                    color={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                );
              } else if (shape.type === "circle") {
                return (
                  <CustomCircle
                    key={index}
                    id={index}
                    shape={shape}
                    idSelected={idSelected as number}
                    setIdSelected={setIdSelected}
                    color={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                );
              } else if (shape.type === "ellipse") {
                return (
                  <CustomEllipse
                    id={index}
                    key={index}
                    shape={shape}
                    color={selectedColor}
                    idSelected={idSelected as number}
                    setIdSelected={setIdSelected}
                    setSelectedColor={setSelectedColor}
                  />
                );
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
                  <CustomText
                    id={index}
                    key={index}
                    shape={shape}
                    color={selectedColor}
                    idSelected={idSelected as number}
                    setIdSelected={setIdSelected}
                    setSelectedColor={setSelectedColor}
                  />
                );
              } else if (shape.type === "image") {
                return <CustomImage key={index} shape={shape} />;
              } else if (shape.type === "star") {
                return (
                  <CustomStar
                    id={index}
                    key={index}
                    shape={shape}
                    color={selectedColor}
                    idSelected={idSelected as number}
                    setIdSelected={setIdSelected}
                    setSelectedColor={setSelectedColor}
                  />
                );
              } else if (shape.type === "arrow") {
                return (
                  <CustomArrow
                    id={index}
                    key={index}
                    shape={shape}
                    color={selectedColor}
                    idSelected={idSelected as number}
                    setIdSelected={setIdSelected}
                    setSelectedColor={setSelectedColor}
                  />
                );
              }
              return null;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

interface Props {
  initialAssets: any;
}

export default CanvasEditor;
