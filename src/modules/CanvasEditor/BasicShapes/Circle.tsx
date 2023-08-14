/* eslint-disable */
import React from "react";
import { Circle } from "react-konva";

const CustomCircle = ({
  shape,
  id,
  idSelected,
  color,
  setIdSelected,
  setSelectedColor,
}: Props) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const [fill, setFill] = React.useState<string>(shape.fill);

  React.useEffect(() => {
    const isSelected = idSelected === id;
    setIsSelected(isSelected);
    if (idSelected === id) setSelectedColor(fill);
  }, [idSelected]);

  React.useEffect(() => {
    isSelected && setFill(color);
  }, [color]);

  return (
    <Circle
      {...shape}
      stroke={isSelected ? "#4FC2FF" : ""}
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

export default CustomCircle;
