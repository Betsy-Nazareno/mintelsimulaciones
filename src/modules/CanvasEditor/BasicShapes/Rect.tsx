/* eslint-disable */
import React from "react";
import { Rect } from "react-konva";

const CustomRect = ({
  shape,
  id,
  idSelected,
  color,
  setIdSelected,
  setSelectedColor,
}: Props) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const [fill, setFill] = React.useState<string>(shape.fill);
  const screenWidth = window?.screen?.width;

  React.useEffect(() => {
    const isSelected = idSelected === id;
    setIsSelected(isSelected);
    if (idSelected === id) setSelectedColor(fill);
  }, [idSelected]);

  React.useEffect(() => {
    isSelected && setFill(color);
  }, [color]);

  return (
    <Rect
      {...shape}
      stroke={isSelected ? "#4FC2FF" : ""}
      width={screenWidth <= 600 ? 250 : shape.width}
      height={screenWidth <= 600 ? 70 : shape.height}
      onClick={() => setIdSelected(id)}
      onLostPointerCapture={() => setIdSelected(-1)} //At the moment is disable the onFocus
      fill={fill}
    />
  );
};

interface Props {
  shape: any;
  id: number;
  color: string;
  idSelected: number;
  setIdSelected: (value: number) => void;
  setSelectedColor: (value: string) => void;
}

export default CustomRect;
