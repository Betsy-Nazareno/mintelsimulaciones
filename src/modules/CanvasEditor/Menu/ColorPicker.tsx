import React from "react";
import { HexAlphaColorPicker } from "react-colorful";

const ColorPicker = ({ color, setColor }: Props) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <div className="col-span-1 m-auto">
      <button onClick={handleClick}>
        <img alt="color picker" src="/icons/color.png" width={30} height={30} />
      </button>
      {displayColorPicker ? (
        <div
          style={{
            position: "absolute",
            zIndex: "99",
            marginRight: "100px",
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
          <HexAlphaColorPicker
            className="ml-[-150px] lg:ml-0"
            color={color}
            onChange={(e) => {
              setColor(e);
            }}
          />
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
