import React from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ color, setColor }: Props) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleColorChange = (e: any) => {
    setColor(e.hex);
  };
  return (
    <div className="col-span-1 m-auto">
      <button onClick={handleClick}>
        <img src="/icons/color.png" width={30} height={30} />
      </button>
      {displayColorPicker ? (
        <div
          style={{
            position: "absolute",
            zIndex: "2",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={handleClose}
          />
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      ) : null}
    </div>
  );
};

interface Props {
  color: string;
  setColor: (value: string) => void;
}

export default ColorPicker;
