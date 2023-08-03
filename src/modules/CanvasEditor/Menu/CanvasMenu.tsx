import React from "react";
import ColorPicker from "./ColorPicker";
import ButtonMenu from "./ButtonMenu";

const CanvasMenu = ({ onShapeSelect, onColorChange, selectedColor }: any) => {
  const [buttonSelected, setButtonSelected] = React.useState("select");
  console.log(selectedColor);
  const handleShapeSelect = (shapeType: any) => {
    setButtonSelected(shapeType);
    onShapeSelect(shapeType);
  };

  const handleColorChange = (color: string) => {
    onColorChange(color);
  };
  //#43649D
  return (
    <div className="bg-white rounded-3xl grid grid-cols-2 p-4 items-center content-center gap-y-4">
      <ButtonMenu
        name="rect"
        size={25}
        onClick={() => handleShapeSelect("rect")}
        buttonSelected={buttonSelected}
      />

      <ButtonMenu
        name="polygon"
        size={25}
        onClick={() => handleShapeSelect("polygon")}
        buttonSelected={buttonSelected}
      />

      <ButtonMenu
        name="circle"
        size={25}
        onClick={() => handleShapeSelect("circle")}
        buttonSelected={buttonSelected}
      />

      <ButtonMenu
        name="ellipse"
        size={25}
        onClick={() => handleShapeSelect("ellipse")}
        buttonSelected={buttonSelected}
      />

      <ButtonMenu
        name="star"
        size={28}
        onClick={() => handleShapeSelect("star")}
        buttonSelected={buttonSelected}
      />

      <ButtonMenu
        name="arrow"
        size={25}
        onClick={() => handleShapeSelect("arrow")}
        buttonSelected={buttonSelected}
      />

      <ButtonMenu
        name="pencil"
        size={25}
        onClick={() => handleShapeSelect("pencil")}
        buttonSelected={buttonSelected}
      />

      <ButtonMenu
        name="select"
        size={25}
        onClick={() => handleShapeSelect("select")}
        buttonSelected={buttonSelected}
      />

      <ButtonMenu
        name="text"
        size={25}
        onClick={() => handleShapeSelect("text")}
        buttonSelected={buttonSelected}
      />

      <ColorPicker color={selectedColor} setColor={handleColorChange} />
    </div>
  );
};

export default CanvasMenu;
