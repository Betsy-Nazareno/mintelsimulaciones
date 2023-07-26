import React from "react";

const CanvasMenu = ({ onShapeSelect, onColorChange }: any) => {
  const handleShapeSelect = (shapeType: any) => {
    onShapeSelect(shapeType);
  };

  const handleColorChange = (color: string) => {
    onColorChange(color);
  };

  return (
    <div>
      <h3>Menu</h3>
      <button onClick={() => handleShapeSelect("rect")}>Rectangle</button>
      <button onClick={() => handleShapeSelect("polygon")}>Polygon</button>
      <h4>Change Color:</h4>
      <button onClick={() => handleColorChange("red")}>Red</button>
      <button onClick={() => handleColorChange("blue")}>Blue</button>
      <button onClick={() => handleColorChange("green")}>Green</button>
    </div>
  );
};

export default CanvasMenu;
