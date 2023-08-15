/* eslint-disable */
import React from "react";
import { Arrow } from "react-konva";

const CustomArrow = ({
  shape,
  idSelected,
  id,
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
    <Arrow
      {...shape}
      fill={fill}
      stroke={isSelected ? "#4FC2FF" : ""}
      onClick={() => setIdSelected(id)}
      onLostPointerCapture={() => setIdSelected(-1)}
    />
  );
};

interface Props {
  shape: any;
  idSelected: number;
  id: number;
  color: string;
  setIdSelected: (value: number) => void;
  setSelectedColor: (value: string) => void;
}

export default CustomArrow;
